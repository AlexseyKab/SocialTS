import {ActionsType, PostDataType, ProfilePageType} from "./State";
import {Dispatch} from "redux";
import {globalAPI, profileAPI} from "../API/API-TS";

export type profileType = {
    aboutMe: string
    contacts: profileContactsType
    lookingForAJobDescription: string
    photos: photosType
}

type photosType ={
    small: string
    large: string
}

type profileContactsType = {
    facebook: string
    vk: string
    github: string

}

export type setUserProfileType = {
    type: 'SET_USERS_PROFILE',
    profile: profileType
}
export type setStatusType = {
    type: 'SET_STATUS',
    status: string
}


let initializationState = {
    postData: [
        {id: 1, message: "Hi, how are you?", value: 10},
        {id: 2, message: "It's my first post", value: 8},
        {id: 3, message: "Yo it-incubator", value: 10},
        {id: 4, message: "Yo", value: 17},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const ProfileReducer = (state: ProfilePageType = initializationState, action: ActionsType): ProfilePageType => {
   switch (action.type) {
       case 'ADD-POST': {
           let newPost: PostDataType  = {
               id: 5,
               message: state.newPostText,
               value: 0
           }
           return {
               ...state,
               postData: state.postData.concat(newPost),
               newPostText: ''
           }
       }
       case 'UPDATE-NEW-POST-TEXT': {
           return {
               ...state,
               newPostText: action.newPostText
           }
       }
       case 'SET_USERS_PROFILE': {
           return {
               ...state,
               profile: action.profile
           }
       }
       case 'SET_STATUS': {
           return {
               ...state,
               status: action.status
           }
       }

       default:
           return state
   }
}
export const setUserProfile = (profile: profileType): setUserProfileType => ({type: 'SET_USERS_PROFILE', profile: profile})
export const setStatus = (status: string): setStatusType => ({type: 'SET_STATUS',  status})



export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        globalAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export {ProfileReducer}

