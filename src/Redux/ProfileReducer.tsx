import {ActionsType, PostDataType, ProfilePageType} from "./State";

let initializationState = {
    postData: [
        {id: 1, message: "Hi, how are you?", value: 10},
        {id: 2, message: "It's my first post", value: 8},
        {id: 3, message: "Yo it-incubator", value: 10},
        {id: 4, message: "Yo", value: 17},
    ],
    newPostText: ''
}

const ProfileReducer = (state: ProfilePageType = initializationState, action: ActionsType): ProfilePageType => {
    if (action.type === 'ADD-POST') {
        let newPost: PostDataType = {
            id: 5,
            message: action.postText,
            value: 0
        }
        return {
            ...state,
            postData: state.postData.concat(newPost)
        }
        //this._state.profilePage.postData.push(newPost)
        //this._rerenderEntireTree(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        return {
            ...state,
            newPostText: action.newPostText
        }
        //this._state.profilePage.newPostText = action.newPostText
        //this._rerenderEntireTree(this._state);
    }return state
}

export {
    ProfileReducer
}