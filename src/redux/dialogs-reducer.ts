
//action types
const SEND_MESSAGE = 'SEND-MESSAGE' as const

// initial state
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
        {id: 1, message: 'Hello. What is your name?'},
        {id: 2, message: 'How is your it'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Where did you study?'},
        {id: 5, message: 'Where do you work?'}
    ]
}

// reducer
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
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type DialogsActionsType =  SendMessageActionType