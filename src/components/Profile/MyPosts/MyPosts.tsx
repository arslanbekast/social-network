import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../components/common/FormsControls/FormsControls";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
}
export const MyPosts = React.memo((props: MyPostsPropsType) => {
    let {posts, addPost} = props;
    const onAddPost = (values: FormDataType) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.postsWrapper}>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {
                    posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    );
})

type FormDataType = {
    newPostText: string
}

const maxLength1000 = maxLengthCreator(1000)
const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={s.addPostFormWrapper}>
            <form onSubmit={props.handleSubmit} className={s.addPostForm}>
                <div className={s.addPostFormTitleWrapper}>
                    <div className={s.addPostFormIconWrapper}>
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <span className={s.addPostFormTitle}>Create post</span>
                </div>
                <div className={s.addPostField}>
                    <Field name="newPostText"
                           component={Textarea}
                           placeholder="Enter your post"
                           validate={[required, maxLength1000]}/>
                </div>
                <div className={s.addPostBtn}>
                    <button>Add post</button>
                </div>

            </form>
        </div>

    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)