import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {followACType, setUsersACType, unfollowACType} from "./UsersReducer";

export type MessageType = {
    message: string
    id: number
}
export type PostDataType = {
    id: number
    message: string
    value: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType

}

export type ActionsType =
    AddPostActiveType
    | UpdatePostType
    | UpdateMessageType
    | SendMessageType
    | followACType
    | unfollowACType
    | setUsersACType

export type StoreType = {
    _state: StateType
    subscribe: (callback: (state: StateType) => void) => void
    _rerenderEntireTree: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
export type AddPostActiveType = {
    type: 'ADD-POST'
    postText: string
}

export type UpdatePostType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type UpdateMessageType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}

export type SendMessageType = {
    type: "SEND-MESSAGE"
    value: string

}

export const store: any = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sveta'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'It-incubator'},
                {id: 4, message: 'it-kamasutra'},
            ],
            newMessageBody: ''
        },
        profilePage: {

            postData: [
                {id: 1, message: "Hi, how are you?", value: 10},
                {id: 2, message: "It's my first post", value: 8},
                {id: 3, message: "Yo it-incubator", value: 10},
                {id: 4, message: "Yo", value: 17},
            ],
            newPostText: ''

        }
    },
    subscribe(callback: (state: StateType) => void) {
        this._rerenderEntireTree = callback
    },
    _rerenderEntireTree(_state: StateType) {
        console.log('Rerender')
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        console.log('dispatc', this, action)
        // if (action.type === 'ADD-POST') {
        //     let newPost: PostDataType = {
        //         id: 5,
        //         message: action.postText,
        //         value: 0
        //     }
        //     this._state.profilePage.postData.push(newPost)
        //     this._rerenderEntireTree(this._state);
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newPostText
        //     this._rerenderEntireTree(this._state);
        // } else
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        /*     if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
             this._state.dialogsPage.newMessageBody = action.body
             this._rerenderEntireTree(this._state);
         } else if (action.type === 'SEND-MESSAGE') {
             let body = this._state.dialogsPage.newMessageBody
             this._state.dialogsPage.newMessageBody = ''
             this._state.dialogsPage.messages.push({id: 5, message: body})
             this._rerenderEntireTree(this._state);
         }*/
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state);
    }
}
export const addPostAC = (postText: string): AddPostActiveType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}

export const onPostChangeAC = (newPostText: string): UpdatePostType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    }
}
export const sendMessageAC = (value: string): SendMessageType => {
    return {
        type: "SEND-MESSAGE",
        value: value
    }
}

export const updateNewMessageBodyAC = (text: string): UpdateMessageType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: text
    }
}

