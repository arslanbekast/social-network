import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> } />

                    <Route path={'/dialogs'} render={ () => <DialogsContainer /> } />
                    <Route path={'/users'} render={ () => <UsersContainer /> } />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />
                </main>
            </div>
    );
}

export default App;
