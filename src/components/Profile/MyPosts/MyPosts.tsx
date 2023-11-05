import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({posts, addPost}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
            newPostElement.current.value = ''
        }

    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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