import React, {FC} from 'react';
import s from './Navbar.module.css'

export const Navbar: FC = () => {
    return (
        <aside className={s.navbar}>
            <nav className={s.nav}>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <a href='/profile'>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a href='/dialogs'>Dialogs</a>
                    </li>
                    <li className={s.item}>
                        <a href='/news'>News</a>
                    </li>
                    <li className={s.item}>
                        <a href='/music'>Music</a>
                    </li>
                    <li className={s.item}>
                        <a href='/settings'>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};