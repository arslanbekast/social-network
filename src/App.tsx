import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {StateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import Login from "./components/Login/Login";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

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
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <main className='main-wrapper'>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to='/profile'/>}/>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/settings'} component={Settings}/>
                            <Route path={'*'} render={() => <div>404 NOT FOUNT</div>}/>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized
})
const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
export default SocialNetworkApp
