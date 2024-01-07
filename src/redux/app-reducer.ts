import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS' as const



const initialState = {
    initialized: false,
}



export const appReducer = (state: AppReducerStateType = initialState, action: AuthReducerActionsType): AppReducerStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

// action creators
export const initializedSuccess = () =>({type: INITIALIZED_SUCCESS})

// thunks
export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData()).finally(() => dispatch(initializedSuccess()))

}

// types
type AppReducerStateType = {
    initialized: boolean
}

type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
type AuthReducerActionsType = initializedSuccessActionType