import React, {ChangeEvent, RefObject} from "react";
import s from "./MyPosts.module.css"
import {AddPostActiveType, UpdatePostType} from "../../../Redux/State";
import Post from "./Posts/Post";

export type typeMyPostProps = {
    postData: Array<typePostData>
    newPostText: string
    onPostChange: (postText: string) => void
    addPost: (text: string) => void
}

export type typePostData = {
    id: number
    message: string
    value: number

}



const MyPosts = (props: typeMyPostProps) => {

    let postElements: Array<JSX.Element> = props.postData.map(p => <Post message={p.message} value={p.value}/>)

    function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
        props.onPostChange(ev.currentTarget.value)
    }

    function handleClick() {
        props.addPost(props.newPostText)
    }

    return (
        <div className={s.description}>
            <div>
                My posts
            </div>
            <div>
                <textarea onChange={handleChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={handleClick}>Add post</button>
            </div>
            <div className={s.posts}>
                <h3>New post</h3>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;
