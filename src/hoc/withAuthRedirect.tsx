import React from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends  React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}