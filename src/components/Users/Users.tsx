import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import noPhoto from '../../assets/images/noPhoto.jpg'

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UserType[]) => void
    // setCurrentPage: (page: number) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
    let pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersContent}>
            <div className={s.pagesBox}>
                {
                    pages.map(p => {
                       return <span style={{cursor: 'pointer'}} className={props.currentPage === p ? s.selectedPage : ''}
                                    onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map((u: UserType) => {
                    return (
                        <div key={u.id} className={s.usersBox}>
                            <div className={s.imgBox}>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : noPhoto}
                                         className={s.userPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};