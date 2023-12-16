const FOLLOW = 'FOLLOW' as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = 'SET_USERS' as const
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT' as const
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING' as const

type PhotosType = {
    small: string | null
    large: string | null
}

type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
    // location: LocationType
}
type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }

}

export type UsersActionsType = FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

type FollowActionType = ReturnType<typeof follow>
export const follow = (userId: number) => ({type: FOLLOW, userId})

type UnFollowActionType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId})

type SetUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users})

type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})