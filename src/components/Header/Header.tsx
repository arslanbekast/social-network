import React, {FC} from 'react';
import logo from "../../assets/images/logo.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

export const Header: FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login}</div>
                        : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </header>
    );
};