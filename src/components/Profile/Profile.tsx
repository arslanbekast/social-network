import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: StoreType
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsType) => void
}

export const Profile: FC<ProfilePropsType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store} />
        </div>
    );
};