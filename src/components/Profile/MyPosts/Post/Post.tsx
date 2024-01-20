import React, {FC} from 'react';
import s from "./Post.module.css";
import noPhoto from '../../../../assets/images/noPhoto.jpg'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src={noPhoto} alt=""/>
            {message}
            <div>
                <button>Like </button> {likesCount}
            </div>
        </div>
    );
};