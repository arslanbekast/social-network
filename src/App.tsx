import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}
type AppPropsType = MapStatePropsType & MapDispatchPropsType
class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
