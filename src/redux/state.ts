export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string

}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

const ADD_POST = 'ADD-POST' as const
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 2, message: "Blabla", likesCount: 13},
                {id: 2, message: "Dadad", likesCount: 22},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsType) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this.getState());
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const UpdateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT,newText: text})

// window.store = store;






