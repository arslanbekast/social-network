import {ActionsType, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST' as const
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const

// type AddPostActionType = {
//     type: 'ADD-POST'
// }
// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
// type ActionsType = AddPostActionType | UpdateNewPostTextActionType

const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 3, message: "It's my first post", likesCount: 25},
            {id: 4, message: "Blabla", likesCount: 13},
            {id: 5, message: "Dadad", likesCount: 22},
        ],
        newPostText: 'it-kamasutra.com'
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

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
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})