import React from "react";
import {addPostAC, AddPostActiveType, onPostChangeAC, UpdatePostType} from "../../../Redux/State";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Post from "./Posts/Post";

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


/*
const MyPostsContainer = () => {


    return <StoreContext.Consumer>
        {(store ):  ReactNode =>  {
            let postElements: Array<JSX.Element> =
                store!.getState().profilePage.postData.map(p => <Post message={p.message} value={p.value}/>)

            let newPostElement = React.createRef<HTMLTextAreaElement>()


            let addPost = () => {
                //let text = newPostElement.current ? newPostElement.current.value : '----'
                //let text = newPostElement.current.value
                if (newPostElement.current) {
                    store!.dispatch(addPostAC(newPostElement.current.value))
                    store!.dispatch(onPostChangeAC(''))
                }
            }

            let onPostChange = () => {
                //let text = newPostElement.current ? newPostElement.current.value : '----'
                if (newPostElement.current) {
                    store!.dispatch(onPostChangeAC(newPostElement.current.value))
                }
            }
        return  <MyPosts
                postElements={postElements}
                newPostElement={newPostElement}
                addPost={addPost}
                onPostChange={onPostChange}
                postData={store!.getState().profilePage.postData}
                newPostText={store!.getState().profilePage.newPostText}
                dispatch={store!.dispatch}/>
        }
    }</StoreContext.Consumer>

}


</StoreContext.Consumer>


export default MyPostsContainer;
*/

let mapStateToProps = (state: any) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postText: string) => {  dispatch(addPostAC(postText))},
        onPostChange: (postText: string) => { dispatch(onPostChangeAC(postText))}
    }
}

// @ts-ignore
const SuperDialogsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default  SuperDialogsContainer



