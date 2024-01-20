import React, {FC} from 'react';
import logo from "../../assets/images/logo.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: () => void
}

export const Header: FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>

            <div className={s.loginBlock}>
                {
                    isAuth
                        ? <div className={s.userNameBlock}>
                            {login}
                            <button onClick={logout}>Logout</button>
                        </div>
                        : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </header>
    );
};