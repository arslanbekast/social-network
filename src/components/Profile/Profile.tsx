import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile: FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
        </div>
    );
};