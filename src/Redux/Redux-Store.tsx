import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store =createStore(reducers)

