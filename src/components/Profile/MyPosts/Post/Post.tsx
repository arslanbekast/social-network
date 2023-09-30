import React, {FC} from 'react';
import s from "./Post.module.css";
import noPhoto from '../../../../assets/images/noPhoto.jpg'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={noPhoto} alt=""/>
            {props.message}
            <div>
                <button>Like </button> {props.likesCount}
            </div>
        </div>
    );
};