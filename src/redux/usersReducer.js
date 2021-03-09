import {followApi, unfollowApi} from "../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS;';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initState =  {
  users : [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
}
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id)return { ...u, followed: true}
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id)return { ...u, followed: false}
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        totalUsersCount: action.totalCount,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
  }
  return state;
}
export const followActionCreator = (id) => {
  return {
    type: FOLLOW,
    id
  }
}
export const unfollowActionCreator = (id) => {
  return {
    type: UNFOLLOW,
    id
  }
}
export const setUsersActionCreator = (users, totalCount) => {
  return {
    type: SET_USERS,
    users,
    totalCount
  }
}
export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}
export const followThunkCreator = (uid) => dispatch => {
  followApi(uid).then(data => {
    if (data.resultCode === 0)
      dispatch(followActionCreator(uid));
  })
}
export const unfollowThunkCreator = (uid) => dispatch => {
  unfollowApi(uid).then(data => {
    if (data.resultCode === 0)
      dispatch(unfollowActionCreator(uid));
  })
}
export default userReducer;