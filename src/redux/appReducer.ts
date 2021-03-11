import {checkAuthThunc} from "./authReducer.ts";

const SET_INITIALIZED = 'SET_INITIALIZED';
export type initStateType = {
  initialized: boolean
};
const initState: initStateType = {
  initialized: false
};
const appReducer = (state = initState, action):initStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {...state, initialized: true};
  }
  return state;
}
export type InitSuccessType = {
  type: typeof SET_INITIALIZED
}
export const setInitializedActionCreator = ():InitSuccessType => ({type: SET_INITIALIZED});
export const initializeApp = () => async (dispatch:any) => {
  await dispatch(checkAuthThunc())
  dispatch(setInitializedActionCreator())
}
export default appReducer;