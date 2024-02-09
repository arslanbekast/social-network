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
                            <span className={s.userName}>{login}</span>
                            <button title='Logout' className={s.logoutBtn} onClick={logout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </button>
                        </div>
                        : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </header>
    );
};