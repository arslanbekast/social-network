import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA' as const



const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}



export const authReducer = (state: AuthReducerStateType = initialState, action: AuthReducerActionsType): AuthReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

// action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

// thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: errorMessage}))
            }
        })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

// types
type AuthReducerStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    isFetching: boolean
}

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type AuthReducerActionsType = setAuthUserDataActionType