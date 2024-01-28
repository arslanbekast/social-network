import React from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T} />
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}