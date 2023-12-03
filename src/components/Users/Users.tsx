import React, {FC} from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: false, fullName: "Dmitry", status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: true, fullName: "Sasha", status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: false, fullName: "Andrew", status: 'I am boss too', location: {city: 'Kiev', country: 'Ukraine'}}
        ])
    }

    return (
        <div className={s.usersContent}>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.usersBox}>
                            <div className={s.imgBox}>
                                <div>
                                    <img src={u.photoUrl} className={s.userPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};