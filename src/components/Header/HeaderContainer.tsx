import React, {Component, FC} from 'react';
import logo from "../../assets/images/logo.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import {ProfileType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {StateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends Component<HeaderContainerPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)