import React from "react";
import MyPosts, {typePostData} from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActiveType, PostDataType, store, UpdatePostType} from "../../Redux/State";
import MyPostsContainer from "./Myposts/MyPostsContainer";

type ProfilePropsType ={
    posts: PostDataType[]
    /*addPost: (postText: string) => void*/
    newPostText: string
    /*updateNewPostText: (newPostText: string) => void*/
    dispatch: (action: AddPostActiveType | UpdatePostType) => void
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postData={props.posts}
                     dispatch={store.dispatch.bind(store)}
                     /*addPost={props.addPost}*/
                     newPostText={props.newPostText}
                     /*updateNewPostText={props.updateNewPostText}*//>
        </div>
    )
}

export default Profile;