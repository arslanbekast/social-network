import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {ProfileType} from "../../../../redux/profile-reducer";
import style from "../../../common/FormsControls/FormsControls.module.css";

type Props = {
    profile: ProfileType
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}
const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormType, Props> & Props> = ({handleSubmit, error, profile}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <strong>Full name:</strong>
                <Field name="fullName" placeholder="Full name" component={Input}/>
            </div>
            <div>
                <strong>Looking for a job:</strong>
                <Field name="lookingForAJob" type="checkbox" component={Input}/>
            </div>
            <div>
                <strong>My professional skills:</strong>
                <Field name="lookingForAJobDescription" placeholder="My professional skills" component={Textarea}/>
            </div>
            <div>
                <strong>About me:</strong>
                <Field name="aboutMe" placeholder="About me" component={Textarea}/>
            </div>

            <div>
                <strong>Contacts:</strong>
                {
                    profile.contacts &&
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                <strong>{key}:</strong>
                                <Field name={"contacts."+key} placeholder={key} component={Input}/>
                            </div>
                        )

                    })
                }
            </div>
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <button>Save</button>
        </form>
    )
}


export const ProfileDataReduxForm = reduxForm<ProfileDataFormType, Props>({form: 'edit-profile'})(ProfileDataForm)