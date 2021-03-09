import React, {useEffect}from 'react';
import User from "./User";
import s from "./Users.module.css";

const Users = (props) => {
  let setCurrentPage = (p) => {
    props.setCurrentPage(p);
    props.setUsers(props.currentPage, props.pageSize);
  }
  useEffect(() => {
    props.setUsers(props.currentPage, props.pageSize);
  }, 0)
  let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
  let page = [];
  for(let i=1; i<pagesCount+1; i++) page.push(i)
  return (
    <>
      <div>
        { page.map(p => (<span onClick={()=>{setCurrentPage(p)}} className={ p==props.currentPage && s.currentPage}>{p}</span>))}
      </div>
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