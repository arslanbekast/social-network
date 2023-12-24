import React from 'react';
import {
    DialogsActionsType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StateType, StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: DialogsActionsType) => void) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)