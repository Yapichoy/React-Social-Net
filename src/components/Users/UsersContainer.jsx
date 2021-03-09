import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  followThunkCreator, getUsersThunkCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

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