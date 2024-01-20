import React, {FC} from 'react';
import {UserType} from "../../../redux/users-reducer";
import s from './User.module.css'
import noPhoto from '../../../assets/images/noPhoto.jpg'
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: Array<number>
}

export const User: FC<UserPropsType> = ({user, follow, unFollow, followingInProgress}) => {

    return (
        <div className={s.userBox}>
            <div className={s.imgBox}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : noPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unFollow(user.id)}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>}
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
        </div>
    );
};