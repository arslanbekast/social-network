import React from 'react';
import mainImg from "../assets/images/main-image.jpg";

export const Profile = () => {
    return (
        <main className='content'>

            <div className='main-img_block'>
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