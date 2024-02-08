import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {StateType} from "./redux-store";
import {stopSubmit} from "redux-form";

// action types
const ADD_POST = 'profile/ADD-POST' as const
const DELETE_POST = 'profile/DELETE-POST' as const
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE' as const
const SET_STATUS = 'profile/SET-STATUS' as const
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS' as const

// initial state
const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.", likesCount: 12},
            {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.", likesCount: 33},
            {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.", likesCount: 13},
            {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.", likesCount: 24},
        ],
        profile: {
            contacts: {} as ContactsType,
            photos: {} as PhotosType
        },
        status: ''
    }

// reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 6, message: action.newPostText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }

}

// action creators
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText})
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})

export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos})

// thunks
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const status = await profileAPI.getStatus(userId)
    dispatch(setStatus(status))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileDataFormType) => async (dispatch: any, getState: () => StateType) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(Number(userId)))
    } else {
        const errorMessage = data.messages[0]
        let wrongNetwork = data.messages[0]
            .slice(
                errorMessage.indexOf(">") + 1,
                errorMessage.indexOf(")")
            )
            .toLocaleLowerCase();
        dispatch(stopSubmit("edit-profile", {contacts: {[wrongNetwork]: errorMessage }}))
        return Promise.reject(errorMessage)
    }
}

// types
export type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe?: string
    contacts: ContactsType
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    photos: PhotosType
    userId?: number
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
}

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>