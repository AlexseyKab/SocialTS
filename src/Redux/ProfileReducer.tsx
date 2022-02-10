import {ActionsType, PostDataType, ProfilePageType} from "./State";

const ProfileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
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