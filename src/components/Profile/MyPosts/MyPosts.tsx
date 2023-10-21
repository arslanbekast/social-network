import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {

    const postsData = [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 2, message: "Blabla", likesCount: 13},
        {id: 2, message: "Dadad", likesCount: 22},
    ]

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
                {
                    postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    );
};