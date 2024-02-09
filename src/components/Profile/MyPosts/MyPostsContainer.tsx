import React from 'react';
import {addPostAC, likeIncrease, ProfileActionsType} from "../../../redux/profile-reducer";
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
        },
        likeIncrease: (postId: string) => {
            dispatch(likeIncrease(postId))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)