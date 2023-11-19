import React, {FC} from 'react';
import {ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType, StoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: StoreType
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: ActionsType) => void
}

export const MyPostsContainer: FC<MyPostsContainerPropsType> = ({store}) => {

    const state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        // @ts-ignore
        <MyPosts posts={state.profilePage.posts}
                // @ts-ignore
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={onPostChange}
                 addPost={addPost}/>
    );
};