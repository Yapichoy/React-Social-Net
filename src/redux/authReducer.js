import {checkAuthApi} from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const initState = {
  data: {
    'userId': null,
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
  }
  return state;
}
export const setUserDataActionCreator = (userData) => ({ type: SET_USER_DATA, userData });
export const setAuthActionCreator = () => ({type: SET_AUTH});

export const checkAuthThunc = () => dispatch => {
  checkAuthApi().then(data => {
    debugger
    if (data.resultCode === 0 ) {
      dispatch(setAuthActionCreator());
      dispatch(setUserDataActionCreator(data.data));
    }
  })
}
export default authReducer;