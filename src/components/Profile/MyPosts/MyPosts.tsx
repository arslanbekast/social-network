import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}



export const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText, updateNewPostText, addPost}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        addPost();
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
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