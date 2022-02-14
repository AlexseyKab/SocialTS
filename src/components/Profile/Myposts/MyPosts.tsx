import React, {ComponentType, FC, RefObject} from "react";
import Post, {propsPost} from "./Posts/Post";
import s from "./MyPosts.module.css"
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";

export type typeMyPostProps = {
    postData: Array<typePostData>
    newPostText: string
    dispatch: (action: AddPostActiveType | UpdatePostType) => void
    /*addPost: (m: string) => void*/
    /*updateNewPostText: (newPostText: string) => void*/
    onPostChange: () => void
    addPost: () => void
    newPostElement: RefObject<HTMLTextAreaElement>
    postElements: Array<JSX.Element>
}

export type typePostData = {
    id: number
    message: string
    value: number

}



const MyPosts = (props: typeMyPostProps) => {
    return (
        <div className={s.description}>
            <div>
                My posts
            </div>
            <div>
                <textarea onChange={props.onPostChange}
                          ref={props.newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                <h3>New post</h3>
            </div>
            {props.postElements}
        </div>
    )
}

export default MyPosts;
