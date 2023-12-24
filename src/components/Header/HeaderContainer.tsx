import React, {Component, FC} from 'react';
import logo from "../../assets/images/logo.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import {ProfileType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends Component<HeaderContainerPropsType>{

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }

};

const mapStateToProps = (state: StateType): MapStatePropsType => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)