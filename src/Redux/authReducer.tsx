import React from "react";
import {ActionsType} from "./State";
import {Dispatch} from "redux";
import {globalAPI, profileAPI} from "../API/API-TS";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./Redux-Store";

const SET_USERS_DATA = 'SET_USERS_DATA'

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
// export type setUsersDataType = {
//     type: SET_USERS_DATA
//     data: dataType
// }

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

type authReducerActionType =
    | ReturnType<typeof setUsersDataAC>
    | ReturnType<typeof setUsersDataAC>


type ThunkType =  ThunkAction<void, AppRootStateType, unknown, ActionsType>

const authReducer = (state: ISType = initialState, action: authReducerActionType) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                 data: {...action.data},
                isAuth: action.isAuth
            }
        }
        default:
            return state
    }
}

export const setUsersDataAC = (data: dataType, isAuth: boolean) => ({type: SET_USERS_DATA, data, isAuth} as const)


export const getAutThunk = () => {
    return (dispatch: Dispatch) => {
        globalAPI.getAutMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUsersDataAC(data.data, true))
            }
        })
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        profileAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAutThunk())
            }
        })
    }
}


export const logoutThunk = () => {
    return (dispatch: Dispatch ) => {
        profileAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUsersDataAC({login: null, email: null, id: null}, false))
            }
        })
    }
}


export default authReducer

/*export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    try {
       const result = await  profileAPI.login(email, password, rememberMe);
          if (result.resultCode === 0) {
              dispatch(getAutThunk())
          }
        } catch (e) {
    }
}*/