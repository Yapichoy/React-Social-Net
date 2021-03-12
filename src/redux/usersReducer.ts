import { Dispatch } from "react";
import {followApi, getUsersApi, unfollowApi} from "../api.ts";
import {UserType} from "../types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS;';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FILTER = 'SET_FILTER';


const initState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  filter: {
    term: '',
    friend: null as null | boolean
  }
}

export type InitStateType = typeof initState;
export type FilterType = typeof initState.filter;
const userReducer = (state = initState, action:any):InitStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) return {...u, followed: true}
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) return {...u, followed: false}
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
    case SET_FILTER:
      return {
        ...state, filter: action.payload
      }
  }
  return state;
}
export const followActionCreator = (id: number) => {
  return {
    type: FOLLOW,
    id
  }
}
export const unfollowActionCreator = (id: number) => {
  return {
    type: UNFOLLOW,
    id
  }
}
export const setUsersActionCreator = (users: UserType, totalCount: number) => {
  return {
    type: SET_USERS,
    users,
    totalCount
  }
}
export const setCurrentPageActionCreator = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}
export const actions = {
  setFilter: (filter:FilterType) => ({type: SET_FILTER, payload: filter})
}
export const followThunkCreator = (uid: number) => async (dispatch: Dispatch<any>) => {
  const data = await followApi(uid);
  if (data.resultCode === 0)
    dispatch(followActionCreator(uid));
}
export const unfollowThunkCreator = (uid: number) => async (dispatch:any) => {
  const data = await unfollowApi(uid)
  if (data.resultCode === 0)
    dispatch(unfollowActionCreator(uid));
}
export const getUsersThunkCreator = (currentPage: number, pageSize: number, filter: FilterType) => async (dispatch:any) => {
  dispatch(actions.setFilter(filter));
  const data = await getUsersApi(currentPage, pageSize, filter?.term ?? '', filter?.friend ?? null);
  dispatch(setUsersActionCreator(data.items, data.totalCount));

}
export default userReducer;