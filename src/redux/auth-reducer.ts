import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

// action types
const SET_USER_DATA = 'auth/SET-USER-DATA' as const
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS' as const


// initial state
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
}


// reducer
export const authReducer = (state: AuthReducerStateType = initialState, action: AuthReducerActionsType): AuthReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload}
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, ...action.payload}
        default:
            return state
    }

}

// action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

// thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const data =  await authAPI.me()
    if (data.resultCode === 0) {
        const {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
           dispatch(getCaptchaUrl())
        }
        const errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: errorMessage}))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(data.url))
}

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

// types
type AuthReducerStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    isFetching: boolean
    captchaUrl: string | null
}

type AuthReducerActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>