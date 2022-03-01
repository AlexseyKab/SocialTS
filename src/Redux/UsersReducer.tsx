import React from "react";
import {ActionsType} from "./State";
import {Dispatch} from "redux";
import {globalAPI} from "../API/API-TS";

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
    following: Array<number>
}
export type followingProgressType = {
    type: 'TOGGLE_IS_FOLLOWED',
    isFetching: boolean
    userId: number
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
    following: []
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
                    ? [...state.following,  action.userId]
                    : state.following.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }
}

export const toggleFollowProgress = (isFetching: boolean, userId: number): followingProgressType => ({type: 'TOGGLE_IS_FOLLOWED', isFetching, userId})
export const followAC = (userId: number): followACType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number):unfollowACType => ({type: 'UNFOLLOW', userId})
export const setUsers = (users: any): setUsersACType => ({type: 'SET_USERS', users})
export const currentPageAC = (currentPage: number): currentPageACType => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCount = (totalCount: number): setUsersTotalCounterACType => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingACType => ({type: 'TOGGLE_IS_FETCHING', isFetching})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetching(true))

        globalAPI.getUsers(currentPage, pageSize).then(data=> {
            dispatch( toggleIsFetching(false))
            dispatch( setUsers(data.items))
            dispatch( setTotalUsersCount(data.totalCount))
        })
    }
}




export default UsersReducer

