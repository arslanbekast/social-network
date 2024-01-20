import {getAuthUserData} from "./auth-reducer";

// action types
const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS' as const

// initial state
const initialState = {
    initialized: false,
}


// reducer
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

type AuthReducerActionsType = ReturnType<typeof initializedSuccess>