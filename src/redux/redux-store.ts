import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
type ReducersType = typeof reducers
export type StateType = ReturnType<ReducersType>

export type StoreType = ReturnType<typeof createStore>

export const store = createStore(reducers)

console.log(store)