import React, {FC} from 'react';
import s from "./ProfileInfo.module.css";
import mainImg from "../../../assets/images/main-image.jpg";
import {Preloader} from "../../Preloader/Preloader";
import noPhoto from '../../../assets/images/noPhoto.jpg'
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.mainImgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div className={s.descBlock}>
                <img className={s.userPhoto} src={props.profile.photos.large ? props.profile.photos.large : noPhoto} alt="user image"/>
                <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
};