import {authApi, checkAuthApi} from "../api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const initState = {
  data: {
    'id': null,
    'email': null,
    'login': null,
  },
  isAuth: false
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, data: {...action.userData} };
    case SET_AUTH:
      return {...state, isAuth: true}
    case LOGIN:
      return {...state, data: {...state.data, userId: action.userId}}
    case LOGOUT:
      return {...state, isAuth: false}
  }
  return state;
}
export const setUserDataActionCreator = (userData) => ({ type: SET_USER_DATA, userData });
export const setAuthActionCreator = () => ({type: SET_AUTH});
export const loginActionCreator = (userId) => ({type: LOGIN, userId});
export const logoutActionCreator = () => ({type: LOGOUT});

export const checkAuthThunc = () => dispatch => {
  checkAuthApi().then(data => {
    if (data.resultCode === 0 ) {
      dispatch(setUserDataActionCreator(data.data));
      dispatch(setAuthActionCreator());
    }
  })
}

export const loginThuncCreator = (formData) => dispatch => {
  authApi.login(formData).then(data => {
    let action = stopSubmit('login', {_error: 'Common error'});
    if (data.resultCode === 0 ) {
      dispatch(loginActionCreator(data.userId));
    } else {
      dispatch(action);
    }
  })
}
export const logoutThuncCreator = () => dispatch => {
  authApi.logout().then(data => {
    if(data.resultCode === 0)
      dispatch(logoutActionCreator());
  })
}
export default authReducer;