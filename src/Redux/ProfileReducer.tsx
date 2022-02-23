import {ActionsType, PostDataType, ProfilePageType} from "./State";

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

let initializationState = {
    postData: [
        {id: 1, message: "Hi, how are you?", value: 10},
        {id: 2, message: "It's my first post", value: 8},
        {id: 3, message: "Yo it-incubator", value: 10},
        {id: 4, message: "Yo", value: 17},
    ],
    newPostText: '',
    profile: null
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
       default:
           return state
   }
}
export const setUserProfile = (profile: profileType): setUserProfileType => ({type: 'SET_USERS_PROFILE', profile: profile})


export {ProfileReducer}

/* if (action.type === 'ADD-POST') {
        let newPost: PostDataType = {
            id: 5,
            message: action.postText,
            value: 0
        }
        return {
            ...state,
            postData: state.postData.concat(newPost),
            newPostText: ''
        }

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        return {
            ...state,
            newPostText: action.newPostText,

        }
        //this._state.profilePage.newPostText = action.newPostText
        //this._rerenderEntireTree(this._state);
    }return state*/