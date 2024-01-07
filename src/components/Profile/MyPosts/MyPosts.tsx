import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../components/common/FormsControls/FormsControls";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
}



export const MyPosts: FC<MyPostsPropsType> = ({posts, addPost}) => {
    const onAddPost = (values: FormDataType) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {
                    posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    );
};

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component={Textarea}
                       placeholder="Enter your post"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)