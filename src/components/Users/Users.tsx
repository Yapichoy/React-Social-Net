import React, {useEffect} from 'react';
import User from "./User";
import s from "./Users.module.css";
import Paginator from "./Paginator.tsx";
import {UserType} from "../../types";
import {Form, Formik, Field} from 'formik';
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm.tsx";
import {FilterType} from "../../redux/usersReducer";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";

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
                                        portionSize,
                                        filter
                                    }) => {
    let setCurrentPage = (p) => {
        setCurrentPageFunc(p);
        setUsers(p, pageSize, filter);
    }
    let onFilterChanged = (filter: FilterType) => {
        setUsers(1, pageSize, filter);
    }
    const history = useHistory();
    /*useEffect(()=>{
        history.push({
            pathname: '/users',
            search: `?term=${filterProps?.term ?? ''}&friend=${filterProps?.friend ?? 'null'}&page=${currentPage}`
        })
    },[filterProps, currentPage])*/
    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1 )) as {term: string, page: string, friend: string};
        let actualPage = parsed.page ? +parsed.page : currentPage;
        let actualFilter = filter;
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string};
        if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend};

        setUsers(actualPage, pageSize, actualFilter);
    },[])

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