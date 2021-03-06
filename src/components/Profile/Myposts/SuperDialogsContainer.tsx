import React from "react";
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../Redux/Redux-Store";

export type typeMyPostProps = {
    postData: Array<typePostData>
    newPostText: string
    dispatch: (action: AddPostActiveType | UpdatePostType) => void
}

export type typePostData = {
    id: number
    message: string
    value: number

}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {  dispatch(addPostAC(newPostText))},
        onPostChange: (postText: string) => { dispatch(onPostChangeAC(postText))}
    }
}


const SuperDialogsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default  SuperDialogsContainer



