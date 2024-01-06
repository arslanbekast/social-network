import {DialogsPageType} from "./store";

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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 6,
                message: action.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }

}

//action creators
export const sendMessageAC = (newMessageText: string) => ({type: SEND_MESSAGE, newMessageText} as const)

//types
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type DialogsActionsType =  SendMessageActionType