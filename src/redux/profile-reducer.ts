import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

// action types
const ADD_POST = 'profile/ADD-POST' as const
const DELETE_POST = 'profile/DELETE-POST' as const
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE' as const
const SET_STATUS = 'profile/SET-STATUS' as const
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS' as const

// initial state
const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 3, message: "It's my first post", likesCount: 25},
            {id: 4, message: "Blabla", likesCount: 13},
            {id: 5, message: "Dadad", likesCount: 22},
        ],
        profile: null,
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

// types
type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe?: string | undefined
    contacts?: ContactsType
    fullName?: string | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | undefined
    photos: PhotosType
    userId?: number | undefined
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
}

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>