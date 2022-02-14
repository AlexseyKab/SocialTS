import React from "react";
import Post from "./Posts/Post";
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";
import MyPosts from "./MyPosts";

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



const MyPostsContainer = (props: typeMyPostProps) => {
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

    return (<MyPosts postData={props.postData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>)
}

export default MyPostsContainer;



