import React, {FC} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <aside className={s.navbar}>
            <nav className={s.nav}>
                <div className={s.navCaption}>More Pages</div>
                <ul>
                    <li className={s.item}>
                        <NavLink to='/profile' activeClassName={s.active}>
                            <i className="fa-regular fa-address-card"></i><span>Profile</span>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/dialogs'  activeClassName={s.active}>
                            <i className="fa-regular fa-comment-dots"></i><span>Dialogs</span>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/users'  activeClassName={s.active}>
                            <i className="fa-solid fa-users"></i><span>Users</span>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/news'  activeClassName={s.active}>
                            <i className="fa-regular fa-newspaper"></i><span>News</span>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/music'  activeClassName={s.active}>
                            <i className="fa-solid fa-music"></i><span>Music</span>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/settings'  activeClassName={s.active}>
                            <i className="fa-solid fa-gear"></i><span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};