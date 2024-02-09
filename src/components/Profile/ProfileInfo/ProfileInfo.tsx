import React, {ChangeEvent, FC, useState} from 'react';
import s from "./ProfileInfo.module.css";
import mainImg from "../../../assets/images/main-image.jpg";
import {Preloader} from "../../common/Preloader/Preloader";
import noPhoto from '../../../assets/images/noPhoto.jpg'
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataFormType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {typeOptions} from "@testing-library/user-event/dist/type/typeImplementation";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
                                                          isOwner,
                                                          profile,
                                                          status,
                                                          updateStatus,
                                                          savePhoto,
                                                          saveProfile
                                                      }) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <>
            <div className={s.profileInfoWrapper}>
                <div className={s.mainImgBox}>
                    <img src={mainImg} alt="main image"/>
                </div>

                <div className={s.descBlock}>
                    <div className={s.userPhotoBox}>
                        <div className={s.userPhoto}>
                            <img src={profile.photos.large || noPhoto} alt="user image"/>
                            {isOwner
                                && <div className={s.changePhotoBox}>
                                    <label htmlFor="photoChange" className={s.changePhotoLabel}>change
                                        <input type="file" className={s.changePhotoInput} id="photoChange"
                                               onChange={onMainPhotoSelected}/>
                                    </label>
                                </div>}


                        </div>
                    </div>

                    <div>
                        <div className={s.userFullName}>{profile.fullName}</div>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            </div>
            <div className={s.aboutWrapper}>
                <div className={s.aboutTitleWrapper}>
                    <h3 className={s.aboutTitle}>About</h3>
                    {isOwner && !editMode &&
                        <button className={s.editBtn} onClick={() => setEditMode(true)}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>}
                </div>

                {
                    editMode
                        ? <ProfileDataReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile}/>
                }
            </div>
        </>
    );
};

type ProfileDataProps = {
    profile: ProfileType
}
const ProfileData = ({profile}: ProfileDataProps) => {

    const profileContacts = Object.keys(profile.contacts) as Array<keyof ContactsType>;

    return (
        <div className={s.aboutDataWrapper}>

            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>Full name:</span>
                <span className={s.aboutDataText}>{profile.fullName}</span>
            </div>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>Looking for a job:</span>
                <span className={s.aboutDataText}>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>
            {
            profile.lookingForAJob &&
                <div className={s.aboutData}>
                    <span className={s.aboutDataTitle}>My professional skills:</span>
                    <span className={s.aboutDataText}>{profile.lookingForAJobDescription}</span>
                </div>
            }
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>About me:</span>
                <span className={s.aboutDataText}>{profile.aboutMe}</span>
            </div>
            <div className={s.aboutData}>
                <span className={s.aboutDataTitle}>Contacts:</span>
                <div className={s.contactsWrapper}>
                    {
                        profileContacts.map((key) => {
                            return profile.contacts[key] && <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key] }/>
                        })
                    }
                </div>

            </div>
        </div>
    )
}


type ContactsProps = {
    contactTitle: string
    contactValue: string | null
}
const Contacts = ({contactTitle, contactValue}: ContactsProps) => {

    const getContact = () => {
        if (contactValue) {
            let icon;
            switch (contactTitle) {
                case 'facebook':
                    icon = <i className="fa-brands fa-facebook"></i>
                    break
                case 'website':
                    icon = <i className="fa-solid fa-link"></i>
                    break
                case 'vk':
                    icon = <i className="fa-brands fa-vk"></i>
                    break
                case 'twitter':
                    icon = <i className="fa-brands fa-twitter"></i>
                    break
                case 'instagram':
                    icon = <i className="fa-brands fa-instagram"></i>
                    break
                case 'youtube':
                    icon = <i className="fa-brands fa-youtube"></i>
                    break
                case 'github':
                    icon = <i className="fa-brands fa-github"></i>
                    break
                case 'mainLink':
                    icon = <i className="fa-brands fa-linkedin"></i>
                    break

            }
            return <a href={contactValue} target='_blank'>{icon}</a>
        }

    }

    return (
        <div className={s.contacts}>
            {getContact()}
        </div>
    )
}