import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

export type AppRootStateType = ReturnType<typeof store.getState>


export const store =createStore(reducers)

// @ts-ignore
window.store =store