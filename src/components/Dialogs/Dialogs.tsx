import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

const DialogItem: FC<DialogItemPropsType> = ({id, name}) => {
    const path = `/dialogs/${id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={s.message}>{message}</div>
}

export const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dimych' />
                <DialogItem id='2' name='Andrey' />
                <DialogItem id='3' name='Sveta' />
                <DialogItem id='4' name='Sasha' />
                <DialogItem id='5' name='Vuktor' />
                <DialogItem id='6' name='Valera' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your it' />
                <Message message='Yo' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>
        </div>
    );
};