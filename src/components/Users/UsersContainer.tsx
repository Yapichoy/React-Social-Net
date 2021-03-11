import React from 'react';
import {connect} from "react-redux";
import Users from "./Users.tsx";
import {
  followThunkCreator, getUsersThunkCreator,
  setCurrentPageActionCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer.ts";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selector.ts";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state)

  }
}
export default compose(
  connect(mapStateToProps, {
    followUser:   followThunkCreator,
    unfollowUser: unfollowThunkCreator,
    setUsers: getUsersThunkCreator,
    setCurrentPage:setCurrentPageActionCreator
  }),
  WithAuthRedirect
)(Users);