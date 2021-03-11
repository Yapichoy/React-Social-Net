import {authApi, checkAuthApi} from "../api.ts";
import {stopSubmit} from "redux-form";
import {MeResponseType, ResultCodes} from "../types/index.ts";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export type InitStateType = {
  data: {
    id: number | null,
    email: string | null,
    login: string | null
  },
  isAuth: boolean
}
const initState: InitStateType = {
  data: {
    'id': null,
    'email': null,
    'login': null,
  },
  isAuth: false
};
const authReducer = (state = initState, action):InitStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, data: {...action.userData} };
    case SET_AUTH:
      return {...state, isAuth: true}
    case LOGIN:
      return {...state, data: {...state.data, id: action.userId}}
    case LOGOUT:
      return {...state, isAuth: false}
  }
  return state;
}
type UserDataType = {
  type: typeof SET_USER_DATA,
  userData: any
}
export const setUserDataActionCreator = (userData):UserDataType => ({ type: SET_USER_DATA, userData });

type AuthType = {
  type: typeof SET_AUTH
}
export const setAuthActionCreator = ():AuthType => ({type: SET_AUTH});

type LoginType = {
  type: typeof LOGIN,
  userId: number
}
export const loginActionCreator = (userId: number):LoginType => ({type: LOGIN, userId});

type LogoutType = {
  type: typeof LOGOUT
}
export const logoutActionCreator = ():LogoutType => ({type: LOGOUT});

export const checkAuthThunc = () => async dispatch => {
    const data: MeResponseType =  await checkAuthApi();
    if (data.resultCode === ResultCodes.Success ) {
      dispatch(setUserDataActionCreator(data.data));
      dispatch(setAuthActionCreator());
    }
}

export const loginThuncCreator = (formData) => async dispatch => {
  const data = await authApi.login(formData)
    let action = stopSubmit('login', {_error: 'Common error'});
    if (data.resultCode ===  ResultCodes.Success ) {
      dispatch(loginActionCreator(data.userId));
    } else {
      dispatch(action);
    }
}
export const logoutThuncCreator = () => async dispatch => {
  const data = await authApi.logout()
    if(data.resultCode === ResultCodes.Success)
      dispatch(logoutActionCreator());
}
export default authReducer;