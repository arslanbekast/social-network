import React, {FC} from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem: FC<DialogItemPropsType> = ({id, name}) => {
    const path = `/dialogs/${id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <i className="fa-solid fa-user"></i>
                {name}
            </NavLink>
        </div>
    )
}