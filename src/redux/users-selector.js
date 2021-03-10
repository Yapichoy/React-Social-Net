import {createSelector} from "reselect";

export const getUsers = (state) => state.usersPage.users;
export const getUsersSelector = createSelector(getUsers,( users) => {
  return users;
})
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;