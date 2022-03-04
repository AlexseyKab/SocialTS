import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperDialogsContainer from "./Myposts/SuperDialogsContainer";
import {profileType} from "../../Redux/ProfileReducer";


type ProfilePropsType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
}
const Profile = (props: ProfilePropsType) => {



    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <SuperDialogsContainer/>
        </div>
    )
}

export default Profile;