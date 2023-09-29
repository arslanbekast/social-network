import React from 'react';
import mainImg from "../../assets/images/main-image.jpg";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <main className={s.content}>

            <div className={s.imgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>

        </main>
    );
};