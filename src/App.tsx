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

type AppPropsType = {
    store: StoreType
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({store}: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Route path={'/profile'} render={ () => <Profile store={store} /> } />

                    <Route path={'/dialogs'} render={ () => <DialogsContainer store={store}/> } />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />
                </main>
            </div>
    );
}

export default App;
