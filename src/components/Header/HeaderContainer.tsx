import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
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

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)