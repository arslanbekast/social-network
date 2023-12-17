import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import noPhoto from '../../assets/images/noPhoto.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
    let pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    const follow = (userId: number) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userId)
                }

            })

    }

    const unFollow = (userId: number) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unFollow(userId)
                }

            })

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
                                    <NavLink to={'/profile/'+u.id}>
                                        <img src={u.photos.small !== null ? u.photos.small : noPhoto}
                                             className={s.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unFollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => follow(u.id)}>Follow</button>}
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