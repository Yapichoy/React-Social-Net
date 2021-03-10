import {followApi, getUserDataApi, profileApi} from "../api";
import {followActionCreator} from "./usersReducer";

const ADD_POST = 'ADD_POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  UPDATE_STATUS = 'UPDATE_STATUS';
const initState =  {
  profile: {
  },
  status: null,
  posts : [
    {id: 1, message: "Test", likesCount: 1},
    {id: 2, message: "Test test", likesCount: 2}
  ]
}
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5, message: action.postMessage, likesCount: 0}]
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case UPDATE_STATUS:
      return {...state, status: action.status}
  }
  return state;
}
export const addPostActionCreator = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateStatusActionCreator = (status) => ({type: UPDATE_STATUS, status});

export const getUserDataThunkCreator = (userId) => dispatch => {
  if (userId !== 0)
    getUserDataApi(userId).then( data => { dispatch(setUserProfileActionCreator(data)) });
}
export const updateStatusThunkCreator = (status) => dispatch => {
    profileApi.setStatus(status).then( data => {
      if (data.resultCode == 0)
      dispatch(updateStatusActionCreator(status));
    });
}
export const getStatusThunkCreator = (userId) => dispatch => {
  profileApi.getStatus(userId).then( data => {
      dispatch(updateStatusActionCreator(data));
  });
}
export default profileReducer;