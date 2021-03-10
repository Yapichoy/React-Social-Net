import React, {useEffect}from 'react';
import User from "./User";
import s from "./Users.module.css";
import Paginator from "./Paginator";

const Users = (props) => {
  let setCurrentPage = (p) => {
    props.setCurrentPage(p);
    props.setUsers(props.currentPage, props.pageSize);
  }
  useEffect(() => {
    props.setUsers(props.currentPage, props.pageSize);
  }, [props.users])

  return (
    <>
     <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} setCurrentPage={setCurrentPage}/>
      <div>
      {props.users.map(u => (
        <User
          key={u.id}
          {...u}
          follow={props.followUser}
          unfollow={props.unfollowUser}
      />))}
      </div>
    </>)
}

export default Users;