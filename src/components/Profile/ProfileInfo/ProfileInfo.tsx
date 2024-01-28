import React, {ChangeEvent, FC, useState} from 'react';
import s from "./ProfileInfo.module.css";
import mainImg from "../../../assets/images/main-image.jpg";
import {Preloader} from "../../common/Preloader/Preloader";
import noPhoto from '../../../assets/images/noPhoto.jpg'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataFormType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })
    }

    return (
        <div>
            <div className={s.mainImgBox}>
                <img src={mainImg} alt="main image"/>
            </div>

            <div className={s.descBlock}>
                <img className={s.userPhoto} src={profile.photos.large || noPhoto} alt="user image"/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>

            {
                editMode
                    ? <ProfileDataReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => setEditMode(true)}/>
            }


        </div>
    );
};

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataProps) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div><strong>Full name:</strong> {profile.fullName}</div>
            <div><strong>Looking for a job:</strong> {profile.lookingForAJob ? "yes" : "no"}</div>
            {
                profile.lookingForAJob &&
                <div><strong>My professional skills:</strong> {profile.lookingForAJobDescription}</div>
            }
            <div><strong>About me:</strong> {profile.aboutMe}</div>
            <div><strong>Contacts:</strong>
                {
                    profile.contacts &&
                    Object.keys(profile.contacts).map(key => {
                        // @ts-ignore
                        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>

                    })
                }
            </div>
        </div>
    )
}



type ContactsProps = {
    contactTitle: string
    contactValue: string | null
}
const Contacts = ({contactTitle, contactValue}: ContactsProps) => {
    return (
        <div>
            <strong>{contactTitle}:</strong> {contactValue}
        </div>
    )
}