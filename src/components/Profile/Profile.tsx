import React, {FC} from 'react';
import mainImg from "../../assets/images/main-image.jpg";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: FC = () => {
    return (
        <div>
            <div className={s.imgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    );
};