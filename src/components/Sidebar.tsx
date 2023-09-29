import React from 'react';
import s from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.nav}>
                <ul>
                    <li className={`${s.item} ${s.active}`}><a href='#'>Profile</a></li>
                    <li className={s.item}><a href='#'>Messages</a></li>
                    <li className={s.item}><a href='#'>News</a></li>
                    <li className={s.item}><a href='#'>Music</a></li>
                    <li className={s.item}><a href='#'>Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};