import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

// action creators
export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})

// thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login))
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