import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you?'} likesCount={0}/>
                <Post message="It's my first post" likesCount={25}/>
            </div>
        </div>
    );
};