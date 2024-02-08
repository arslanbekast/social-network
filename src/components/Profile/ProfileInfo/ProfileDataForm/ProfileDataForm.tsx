import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {ProfileType} from "../../../../redux/profile-reducer";
import style from "../../../common/FormsControls/FormsControls.module.css";
import s from '../ProfileInfo.module.css'

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
        <form onSubmit={handleSubmit} className={s.aboutDataWrapper}>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>Full name:</span>
                <Field name="fullName" placeholder="Full name" component={Input}/>
            </div>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>Looking for a job:</span>
                <Field name="lookingForAJob" type="checkbox" component={Input}/>
            </div>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>My professional skills:</span>
                <Field name="lookingForAJobDescription" placeholder="My professional skills" component={Textarea}/>
            </div>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>About me:</span>
                <Field name="aboutMe" placeholder="About me" component={Textarea}/>
            </div>

            <div className={s.aboutData + " " + s.editAboutData}>
                <span className={s.aboutDataTitle}>Contacts:</span>
                <div className={s.editContactsWrapper}>
                    {
                        profile.contacts &&
                        Object.keys(profile.contacts).map(key => {
                            return (
                                <div key={key} className={s.editContact}>
                                    <span className={s.aboutDataTitle}>{key}:</span>
                                    <Field name={"contacts." + key} placeholder={key} component={Input}/>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
            {
            error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <button className={s.saveBtn}>
                <i className="fa-regular fa-floppy-disk"></i>
                Save
            </button>
        </form>
    )
}


export const ProfileDataReduxForm = reduxForm<ProfileDataFormType, Props>({form: 'edit-profile'})(ProfileDataForm)