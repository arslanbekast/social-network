import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts: FC<MyPostsPropsType> = ({posts}) => {

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
                    posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    );
};