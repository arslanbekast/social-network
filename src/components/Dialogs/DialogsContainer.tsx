import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";

type DialogsContainerPropsType = {
    store: StoreType
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsType) => void
}

export const DialogsContainer: FC<DialogsContainerPropsType> = ({store}) => {

    // @ts-ignore
    let state = store.getState().dialogsPage

    const sendMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }
    const onNewMessageChange = (text: string) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={sendMessage} dialogsPage={state} />
};