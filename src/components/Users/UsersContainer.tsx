import React, {FC} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersActionsType,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";


type UsersAPIComponentPropsType = {
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

class UsersContainer extends React.Component<UsersAPIComponentPropsType>{

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
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
};


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)