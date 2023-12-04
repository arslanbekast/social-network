import React, {FC} from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import noPhoto from '../../assets/images/noPhoto.jpg'

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    return (
        <div className={s.usersContent}>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.usersBox}>
                            <div className={s.imgBox}>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : noPhoto} className={s.userPhoto}/>
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