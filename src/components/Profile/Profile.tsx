import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperDialogsContainer from "./Myposts/SuperDialogsContainer";


type ProfilePropsType = {
    profile: any
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <SuperDialogsContainer/>
        </div>
    )
}

export default Profile;