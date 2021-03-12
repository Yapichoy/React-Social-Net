import React, {useEffect} from 'react';
import User from "./User";
import s from "./Users.module.css";
import Paginator from "./Paginator.tsx";
import {UserType} from "../../types";
import {Form, Formik, Field} from 'formik';
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm.tsx";
import {FilterType} from "../../redux/usersReducer";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPageFunc: () => void,
    portionSize?: number,
    setUsers: (currentPage: number, pageSize: number) => null,
    users: Array<UserType>
}

const Users: React.FC<PropsType> = ({
                                        totalUsersCount,
                                        pageSize,
                                        currentPage,
                                        setCurrentPageFunc,
                                        setUsers,
                                        users,
                                        followUser,
                                        unfollowUser,
                                        portionSize
                                    }) => {
    let setCurrentPage = (p) => {
        setCurrentPageFunc(p);
        setUsers(p, pageSize);
    }
    let onFilterChanged = (filter: FilterType) => {
        setUsers(1, pageSize, filter);
    }
    useEffect(() => {
        setUsers(currentPage, pageSize);
    }, [])

    return (
        <>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       setCurrentPage={setCurrentPage}/>
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