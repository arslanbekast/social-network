import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import mainImg from "../../../assets/images/main-image.jpg";
import {Preloader} from "../../common/Preloader/Preloader";
import noPhoto from '../../../assets/images/noPhoto.jpg'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.mainImgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div className={s.descBlock}>
                <img className={s.userPhoto} src={profile.photos.large ? profile.photos.large : noPhoto} alt="user image"/>
                <div>
                    <span>{profile.aboutMe}</span>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
};