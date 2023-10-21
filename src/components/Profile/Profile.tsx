import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: PostType[]
}

export const Profile: FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
};