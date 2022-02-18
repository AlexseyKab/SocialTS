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

export type UserType={
    id: number,
    followed: boolean
    photos: PhotoType
    name: string,
    status: string
    photoUrl: string,
    location: LocalType
}
export type ISType = {
    users: Array<UserType>
}
export type followACType = {
    type: 'FOLLOW',
    userId: number
}
export type unfollowACType = {
    type: 'UNFOLLOW',
    userId: number
}
export type setUsersACType = {
    type: 'SET_USERS',
    users: any
}

let initialState:ISType = {
    users: [

    ],
}

const UsersReducer = (state:ISType = initialState, action: ActionsType):ISType => {
    switch (action.type) {
    case 'FOLLOW':{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

    case 'UNFOLLOW':{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: any) => ({type: 'SET_USERS', users})


export default UsersReducer

