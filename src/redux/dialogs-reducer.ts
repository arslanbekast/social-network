import {ActionsType, DialogsPageType} from "./state";

// type UpdateNewMessageTextActionType = {
//     type: 'UPDATE-NEW-MESSAGE-TEXT'
//     messageText: string
// }
// type SendMessageActionType = {
//     type: 'SEND-MESSAGE'
// }
// type ActionsType = UpdateNewMessageTextActionType | SendMessageActionType

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT' as const
const SEND_MESSAGE = 'SEND-MESSAGE' as const

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.messageText
            return state
        case "SEND-MESSAGE":
            const newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }

}

export const updateNewMessageTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})