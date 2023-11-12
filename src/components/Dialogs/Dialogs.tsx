import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    let newMessageText = dialogsPage.newMessageText

    const sendMessage = () => {
        dispatch(sendMessageActionCreator())
    }
    const onChangeHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            dispatch(updateNewMessageTextActionCreator(text))
        }
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
                        <textarea ref={newMessageElement} value={newMessageText} onChange={onChangeHandler}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
};