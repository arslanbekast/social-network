import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = ({state}) => {

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
            </div>
        </div>
    );
};