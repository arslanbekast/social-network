
const FOLLOW = 'FOLLOW' as const
const UNFOLLOW = 'UNFOLLOW' as const
const SET_USERS = 'SET_USERS' as const

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
}

const initialState = {
        users: [
            // {id: 1, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: false, fullName: "Dmitry", status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            // {id: 2, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: true, fullName: "Sasha", status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}},
            // {id: 3, photoUrl: 'https://cybersecurity-excellence-awards.com/wp-content/uploads/2021/01/676420.jpg', followed: false, fullName: "Andrew", status: 'I am boss too', location: {city: 'Kiev', country: 'Ukraine'}}
        ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }

}

export type UsersActionsType = FollowActionType | UnFollowActionType | SetUsersActionType

type FollowActionType = ReturnType<typeof followAC>
export const followAC = (userId: number) => ( {type: FOLLOW, userId} )

type UnFollowActionType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => ( {type: UNFOLLOW, userId} )

type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => ( {type: SET_USERS, users} )