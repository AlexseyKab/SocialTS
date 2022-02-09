import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css"
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";

export type typeMyPostProps = {
    postData: Array<typePostData>
    newPostText: string
    dispatch: (action: AddPostActiveType | UpdatePostType) => void
   /* addPost: (m: string) => void*/
    /*updateNewPostText: (newPostText: string) => void*/
}

export type typePostData = {
    id: number
    message: string
    value: number
}



const MyPosts = (props: typeMyPostProps) => {
    let postElements =
        props.postData.map(p => <Post message={p.message} value={p.value}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    let addPost = () => {
        //let text = newPostElement.current ? newPostElement.current.value : '----'
        //let text = newPostElement.current.value
        if(newPostElement.current) {
            props.dispatch(addPostAC(newPostElement.current.value)  )
            props.dispatch(onPostChangeAC(''))
        }
    }

    let onPostChange = () => {
        //let text = newPostElement.current ? newPostElement.current.value : '----'
        if (newPostElement.current) {
            props.dispatch(onPostChangeAC(newPostElement.current.value))
        }


    }

    return (
        <div className={s.description}>
            <div>
                My posts
            </div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                <h3>New post</h3>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;
