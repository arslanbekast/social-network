import React, {FC} from 'react';
import s from "./Post.module.css";
import noPhoto from '../../../../assets/images/noPhoto.jpg'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.post}>
                <div className={s.postAuthor}>
                    <div className={s.authorPhoto}>
                        <img src={noPhoto} alt=""/>
                    </div>

                    <div className={s.authorNameWrapper}>
                        <span className={s.authorName}>Victor Exrixon</span>
                        <span className={s.postTime}>22 min ago</span>
                    </div>

                </div>

                <div className={s.postText}>
                    {message}
                    <span className={s.seeMore}>
                        <a href="#">See more</a>
                    </span>
                </div>

                <div className={s.postBottom}>
                    <button className={s.likeBtn}><i className="fa-solid fa-thumbs-up"></i></button>
                    <span className={s.likesCount}>{likesCount}</span>
                </div>
            </div>
        </div>

    );
};