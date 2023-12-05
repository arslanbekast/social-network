import React, {FC} from 'react';
import {Users} from "./Users";
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


export default connect(mapStateToProps, mapDispatchToProps)(Users)