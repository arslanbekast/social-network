import React, {FC} from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersActionsType, UsersType} from "../../redux/users-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
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
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)