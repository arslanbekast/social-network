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
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>{user.name}</div>
                <div className={s.userStatus}>{user.status}</div>
            </div>
            <div className={s.followBtn}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => unFollow(user.id)}>UNFOLLOW</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => follow(user.id)}>FOLLOW</button>}
            </div>
        </div>
    );
};