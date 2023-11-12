import {ActionsType, ProfilePageType} from "./state";

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

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {

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