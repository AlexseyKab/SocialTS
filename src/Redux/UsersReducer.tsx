import React from "react";
import {ActionsType} from "./State";

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you?", value: 10},
        {id: 2, message: "It's my first post", value: 8},
        {id: 3, message: "Yo it-incubator", value: 10},
        {id: 4, message: "Yo", value: 17},
    ],
    newPostText: ''
}

const UsersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state
    }
}