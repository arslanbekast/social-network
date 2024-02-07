import React, {FC} from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    message: string
}

export const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={s.message}>{message}</div>
}