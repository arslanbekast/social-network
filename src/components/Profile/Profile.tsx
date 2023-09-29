import React from 'react';
import mainImg from "../../assets/images/main-image.jpg";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <main className={s.content}>

            <div className={s.imgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts/>

        </main>
    );
};