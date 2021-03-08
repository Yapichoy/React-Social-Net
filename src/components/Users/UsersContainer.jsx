import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unfollowActionCreator
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    followUser:   id => dispatch(followActionCreator(id)),
    unfollowUser: id => dispatch(unfollowActionCreator(id)),
    setUsers: (users, totalCount) => dispatch(setUsersActionCreator(users, totalCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage))
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;