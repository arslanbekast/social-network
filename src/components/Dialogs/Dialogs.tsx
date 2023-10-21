import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
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

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(m => <Message key={m.id} message={m.message} />)
                }
            </div>
        </div>
    );
};