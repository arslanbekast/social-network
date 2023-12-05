import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import noPhoto from '../../assets/images/noPhoto.jpg'

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    getUsers = (pageNumber: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.getUsers(pageNumber)
    }

    render() {
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
        let pages = []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.usersContent}>
                <div className={s.pagesBox}>
                    {
                        pages.map(p => {
                           return <span style={{cursor: 'pointer'}} className={this.props.currentPage === p ? s.selectedPage : ''}
                                        onClick={() => this.onPageChanged(p)}>{p}</span>
                        })
                    }
                </div>
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