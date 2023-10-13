import React from 'react';
import s from "./ProfileInfo.module.css";
import mainImg from "../../../assets/images/main-image.jpg";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div>
                ava + description
            </div>
        </div>
    );
};