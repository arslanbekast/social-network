import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={0}/>
                <Post message="It's my first post" likesCount={25}/>
            </div>
        </div>
    );
};