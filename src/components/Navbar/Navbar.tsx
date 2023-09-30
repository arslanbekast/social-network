import React, {FC} from 'react';
import s from './Navbar.module.css'

export const Navbar: FC = () => {
    return (
        <aside className={s.navbar}>
            <nav className={s.nav}>
                <ul>
                    <li className={`${s.item} ${s.active}`}><a href='src/components/Navbar/Navbar#'>Profile</a></li>
                    <li className={s.item}><a href='src/components/Navbar/Navbar#'>Messages</a></li>
                    <li className={s.item}><a href='src/components/Navbar/Navbar#'>News</a></li>
                    <li className={s.item}><a href='src/components/Navbar/Navbar#'>Music</a></li>
                    <li className={s.item}><a href='src/components/Navbar/Navbar#'>Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};