import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs: FC<DialogsPropsType> = ({dialogs, messages}) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    messages.map(m => <Message key={m.id} message={m.message} />)
                }
            </div>
        </div>
    );
};