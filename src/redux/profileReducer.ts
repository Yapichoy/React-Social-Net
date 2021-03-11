import {getUserDataApi, profileApi} from "../api";
import {PostType, ProfileType} from "../types";

const ADD_POST = 'ADD_POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  UPDATE_STATUS = 'UPDATE_STATUS',
  UPDATE_PHOTO = 'UPDATE_PHOTO';

const initState = {
  profile: null as ProfileType | null,
  status: null as string | null,
  posts: [
    {id: 1, message: "Test", likesCount: 1},
    {id: 2, message: "Test test", likesCount: 2}
  ] as Array<PostType>
}
type InitialStateType = typeof initState;
const profileReducer = (state = initState, action):InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.postMessage, likesCount: 0}]
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case UPDATE_STATUS:
      return {...state, status: action.status}
    case UPDATE_PHOTO:
      return {...state, profile: {...state.profile, photos: {...action.photos}} }
  }
  return state;
}
export const addPostActionCreator = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateStatusActionCreator = (status) => ({type: UPDATE_STATUS, status});
export const updatePhotoActionCreator = (photos) => ({type: UPDATE_PHOTO, photos});

export const getUserDataThunkCreator = (userId) => async dispatch => {
  let data = await getUserDataApi(userId);
  dispatch(setUserProfileActionCreator(data));
}
export const updateStatusThunkCreator = (status) => async dispatch => {
  const data = await profileApi.setStatus(status);
  if (data.resultCode == 0)
    dispatch(updateStatusActionCreator(status));
}
export const getStatusThunkCreator = (userId) => async dispatch => {
  const data = await profileApi.getStatus(userId);
  dispatch(updateStatusActionCreator(data));
}

export const setPhotoThunkCreator = (file) => async dispatch => {
  const resp = await profileApi.setPhoto(file);
  if(resp.resultCode == 0)
    dispatch(updatePhotoActionCreator(resp.data.photos));
}
export default profileReducer;