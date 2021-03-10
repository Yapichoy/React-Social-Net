import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  followThunkCreator, getUsersThunkCreator,
  setCurrentPageActionCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selector";

/*const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

  }
}*/
const mapStateToProps = (state) => {
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