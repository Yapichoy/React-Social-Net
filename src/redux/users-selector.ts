import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => state.usersPage.users;
export const getUsersSelector = createSelector(getUsers,( users) => {
  return users;
})
export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;
export const getFilterState = (state: AppStateType) => state.usersPage.filter;