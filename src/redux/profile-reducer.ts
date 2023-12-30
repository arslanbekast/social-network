import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST' as const
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const
const SET_USER_PROFILE = 'SET-USER-PROFILE' as const
const SET_STATUS = 'SET-STATUS' as const

const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 3, message: "It's my first post", likesCount: 25},
            {id: 4, message: "Blabla", likesCount: 13},
            {id: 5, message: "Dadad", likesCount: 22},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null,
        status: ''
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }

}

// action creators
export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})

// thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(status => {
            dispatch(setStatus(status))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
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
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type ProfileActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | ReturnType<typeof setStatus>