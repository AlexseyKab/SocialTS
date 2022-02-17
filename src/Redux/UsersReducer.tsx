import React from "react";
import {ActionsType} from "./State";
import {deflate} from "zlib";

type LocalType = {
    city: string,
    country: string
}

type ISType = {
    id: number,
    followed: boolean
    fullName: string,
    location: Array<LocalType>
}
export type followACType = {
    type: 'FOLLOW',
    userId: number
}
export type unfollowACType = {
    type: 'UNFOLLOW',
    userId: number
}

let initialState = {
    users: [
        {id: 1, followed: false, fullName: "I am boss", location: {city: "Minsk", country: "Belarus"} },
        {id: 2, followed: true, fullName: "I am boss too", location: {city: "Moscow", country: "Russia"} },
        {id: 3, followed: false, fullName: "I am boss too", location: {city: "Kiev", country: "Ukraine"} },
    ],
}

const UsersReducer = (state = initialState, action: ActionsType) => {
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

        default: return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})

export default UsersReducer

