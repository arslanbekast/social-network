import {ActionsType, ProfilePageType} from "./store";

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
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "Blabla", likesCount: 13},
            {id: 2, message: "Dadad", likesCount: 22},
        ],
        newPostText: 'it-kamasutra.com'
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})