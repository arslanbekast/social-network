import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({state, dispatch}: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Route path={'/profile'} render={ () => <Profile profilePage={state.profilePage}
                                                                     dispatch={dispatch} /> } />
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsPage={state.dialogsPage}
                                                                     dispatch={dispatch}/> } />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />
                </main>
            </div>
    );
}

export default App;
