import React from "react";
import {ActionsType} from "./State";

type LocalType = {
    city: string,
    country: string
}
export type UserType={
    id: number,
    followed: boolean
    fullName: string,
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
        {id: 1, followed: false,
            photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
            fullName: 'Dmitry', status: "I am boss", location: {city: "Minsk", country: "Belarus"} },
        {id: 2, followed: true,
            photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
            fullName: 'Sasha', status: "I am boss too", location: {city: "Moscow", country: "Russia"} },
        {id: 3, followed: false,
            photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
            fullName: 'Andrey',status: "I am boss too", location: {city: "Kiev", country: "Ukraine"} },
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

