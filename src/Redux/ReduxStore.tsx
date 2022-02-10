import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

let reducers = combineReducers({
    //ProfileReducer:ProfileReducer,
    //DialogsReducer:DialogsReducer
})

let store = createStore(reducers)

export default store