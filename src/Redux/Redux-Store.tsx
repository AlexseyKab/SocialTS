import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store =createStore(reducers)
