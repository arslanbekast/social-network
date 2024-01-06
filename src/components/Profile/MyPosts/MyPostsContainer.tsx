import React from 'react';
import {addPostAC, ProfileActionsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)