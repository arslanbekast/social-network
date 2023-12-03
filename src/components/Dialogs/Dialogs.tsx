import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType
} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
    // dispatch: (action: ActionsType) => void
}

export const Dialogs: FC<DialogsPropsType> = ({updateNewMessageText, sendMessage, dialogsPage}) => {

    let newMessageText = dialogsPage.newMessageText

    const onSendMessage = () => {
        sendMessage();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)
                }

                <div>
                    <div>
                        <textarea value={newMessageText} onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
};