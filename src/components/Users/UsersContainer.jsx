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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

  }
}

const UsersContainer = connect(mapStateToProps, {
  followUser:   followThunkCreator,
  unfollowUser: unfollowThunkCreator,
  setUsers: getUsersThunkCreator,
  setCurrentPage:setCurrentPageActionCreator
})(WithAuthRedirect(Users))

export default UsersContainer;