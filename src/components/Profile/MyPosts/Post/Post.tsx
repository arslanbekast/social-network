import React, {FC} from 'react';
import s from "./Post.module.css";
import noPhoto from '../../../../assets/images/noPhoto.jpg'

type PostPropsType = {
    postId: string
    message: string
    likesCount: number
    likeIncrease: (postId: string) => void
}

export const Post: FC<PostPropsType> = ({postId, message, likesCount, likeIncrease}) => {

    const onLikeIncrease = () => {
        likeIncrease(postId)
    }

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
                    <button className={s.likeBtn} onClick={onLikeIncrease}><i className="fa-solid fa-thumbs-up"></i></button>
                    <span className={s.likesCount}>{likesCount} Like</span>
                </div>
            </div>
        </div>

    );
};