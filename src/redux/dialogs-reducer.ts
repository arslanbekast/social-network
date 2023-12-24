import {DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT' as const
const SEND_MESSAGE = 'SEND-MESSAGE' as const

const initialState = {
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
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageText: action.messageText}
        case "SEND-MESSAGE":
            const newMessage = {
                id: 6,
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        default:
            return state
    }

}

//action creators
export const updateNewMessageTextAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})
export const sendMessageAC = () => ({type: SEND_MESSAGE})

//types
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type DialogsActionsType = UpdateNewMessageTextActionType | SendMessageActionType