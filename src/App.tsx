import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/store";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
    // store: StoreType
    // state: StateType
    // dispatch: (action: ActionsType) => void
}

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Route path={'/profile'} render={ () => <Profile /> } />

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
