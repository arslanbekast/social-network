
const SET_USER_DATA = 'SET-USER-DATA' as const

type AuthReducerStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    isFetching: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

type AuthReducerActionsType = SetUserData

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

type SetUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})