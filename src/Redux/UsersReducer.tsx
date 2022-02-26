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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    following: boolean
}
export type followingProgressType = {
    type: 'TOGGLE_IS_FOLLOWED',
    isFetching: boolean
}
export type toggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type setUsersTotalCounterACType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalCount: number
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
export type currentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}


let initialState:ISType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    following: false
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
                users: action.users
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case 'SET_TOTAL_USERS_COUNT': {
            return  {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case 'TOGGLE_IS_FOLLOWED': {
            return {
                ...state,
                following: action.isFetching
            }
        }

        default:
            return state
    }
}

export const followingProgress = (isFetching: boolean): followingProgressType => ({type: 'TOGGLE_IS_FOLLOWED', isFetching})
export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: any) => ({type: 'SET_USERS', users})
export const currentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setUsersTotalCounterAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})



export default UsersReducer

