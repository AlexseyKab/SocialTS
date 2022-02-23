import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperDialogsContainer from "./Myposts/SuperDialogsContainer";


type ProfilePropsType = {
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <SuperDialogsContainer/>
        </div>
    )
}

export default Profile;