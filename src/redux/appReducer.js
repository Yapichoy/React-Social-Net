import {authApi, checkAuthApi} from "../api";
import {stopSubmit} from "redux-form";
import {checkAuthThunc, setUserDataActionCreator} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';
const initState = {
  initialized: false
};
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: true};
  }
  return state;
}
export const setInitializedActionCreator = () => ({ type: SET_INITIALIZED });
export const initializeApp = () => dispatch => {
  dispatch(checkAuthThunc()).then(()=> {
    dispatch(setInitializedActionCreator())
  });
}
export default appReducer;