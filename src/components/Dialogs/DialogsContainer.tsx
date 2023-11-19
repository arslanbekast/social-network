import React, {FC} from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StateType, StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ActionsType} from "../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)