import React, {FC} from 'react';
import s from "./Post.module.css";
import noPhoto from '../../../../assets/images/noPhoto.jpg'

export const Post: FC = () => {
    return (
        <div className={s.item}>
            <img src={noPhoto} alt=""/>
            post 1
            <div>
                <button>Like</button>
            </div>
        </div>
    );
};