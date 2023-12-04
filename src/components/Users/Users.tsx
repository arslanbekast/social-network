import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import noPhoto from '../../assets/images/noPhoto.jpg'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType, any>{

    constructor(props: UsersPropsType) {
        super(props);
        this.getUsers()
    }

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={s.usersContent}>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map((u: UserType) => {
                        return (
                            <div key={u.id} className={s.usersBox}>
                                <div className={s.imgBox}>
                                    <div>
                                        <img src={u.photos.small !== null ? u.photos.small : noPhoto}
                                             className={s.userPhoto}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
};