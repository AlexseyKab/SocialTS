import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperDialogsContainer from "./Myposts/SuperDialogsContainer";
import {profileType} from "../../Redux/ProfileReducer";


type ProfilePropsType = {
    profile: profileType
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