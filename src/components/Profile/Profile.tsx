import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile: FC<ProfilePropsType> = ({state}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts}/>
        </div>
    );
};