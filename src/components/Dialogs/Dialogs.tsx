import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = ({state}) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        const msg = newMessageElement.current?.value
        alert(msg)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    state.messages.map(m => <Message key={m.id} message={m.message} />)
                }

                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
};