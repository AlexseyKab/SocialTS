import React from "react";
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

let mapStateToProps = (state: any) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (postText: string) => {  dispatch(addPostAC(postText))},
        onPostChange: (postText: string) => { dispatch(onPostChangeAC(postText))}
    }
}


const SuperDialogsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default  SuperDialogsContainer



