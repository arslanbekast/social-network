import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}



export const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {
                    posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    );
};