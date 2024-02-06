import React, {FC} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import s from "./Profile.module.css";

type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const Profile: FC<ProfilePropsType> = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile}) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
};