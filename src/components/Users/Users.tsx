import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export const Users: FC<UsersPropsType> = (props) => {
    const {users, pageSize, totalUsersCount, currentPage, onPageChanged, follow, unFollow, followingInProgress} = props
    return (
        <div className={s.usersContent}>
            <Paginator pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>

            {
                users.map((u: UserType) => {
                    return (
                        <User key={u.id} user={u}
                              follow={follow}
                              unFollow={unFollow}
                              followingInProgress={followingInProgress} />
                    )
                })
            }
        </div>
    );
};