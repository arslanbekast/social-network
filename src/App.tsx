import React from 'react';
import './App.css';
import logo from './assets/images/logo.png'
import mainImg from './assets/images/main-image.jpg'

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src={logo} alt=""/>
            </header>

            <aside className='sidebar'>
                <nav className='nav'>
                    <ul>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Messages</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>Music</a></li>
                        <li><a href='#'>Settings</a></li>
                    </ul>
                </nav>
            </aside>

            <main className='content'>

                <div className='main-img_block'>
                    <img src={mainImg} alt="main image"/>
                </div>

                <div>
                    ava + description
                </div>

                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                        <div>post 3</div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default App;
