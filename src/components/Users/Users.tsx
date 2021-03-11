import React, {useEffect}from 'react';
import User from "./User";
import s from "./Users.module.css";
import Paginator from "./Paginator.tsx";
import {UserType} from "../../types";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPageFunc: () => void,
    portionSize?: number,
    setUsers: (currentPage:number, pageSize:number) => null,
    users: Array<UserType>
}

const Users: React.FC<PropsType>= ({totalUsersCount, pageSize, currentPage, setCurrentPageFunc, setUsers, users, followUser, unfollowUser, portionSize}) => {
  let setCurrentPage = (p) => {
    setCurrentPageFunc(p);
    setUsers(currentPage, pageSize);
  }
  useEffect(() => {
    setUsers(currentPage, pageSize);
  }, [users])

  return (
    <>
     <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div>
      {users.map(u => (
        <User
          key={u.id}
          {...u}
          follow={followUser}
          unfollow={unfollowUser}
      />))}
      </div>
    </>)
}

export default Users;