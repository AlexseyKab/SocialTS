import React from "react";
import {ActionsType} from "./State";

type LocalType = {
    city: string,
    country: string
}

type PhotoType = {
    small: null | string
    large: null | string
}

export type UserType = {
    /*   id: number,
       followed: boolean
       photos: PhotoType
       name: string,
       status: string
       photoUrl: string,
       location: LocalType*/
}
export type setUsersDataType = {
    type: 'SET_USERS_DATA'
    data: dataType
}

export type dataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type ISType = {
    data: dataType
    isAuth: boolean
}


let initialState: ISType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

const authReducer = (state: ISType = initialState, action: ActionsType): ISType => {
    switch (action.type) {
        case 'SET_USERS_DATA': {
            return {
                ...state,
                 data: {...action.data},
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setUsersDataAC = (data: dataType): setUsersDataType => ({type: 'SET_USERS_DATA', data})

export default authReducer

