import {StateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: StateType) => {
    return state.usersPage.users
}

// Пример создания "сложного" селектора с помощью библиотеки reselect
// Простые селекторы НЕ нужно создавать с помощью reselect
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}