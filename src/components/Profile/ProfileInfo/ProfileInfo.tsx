import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {profileType} from "../../../Redux/ProfileReducer";
import userPhoto from "../../../assets/images/thumb-1920-288376.jpg";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/* <div className={s.content}>
                <img
                    src="https://cdn.shazoo.ru/c800x360/258912_Jv7rCOP3Rs_kratos_3_wallpaper_1600x900.jpg"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ?  props.profile.photos.large : userPhoto}
                     style={{height: "350px"}}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

              <div>
                  <div>{props.profile.aboutMe}</div>
                  <div>{props.profile.contacts.vk}</div>
                  <div>{props.profile.contacts.github}</div>
                  <div>{props.profile.contacts.facebook}</div>
                  <div>{props.profile.lookingForAJobDescription}</div>
              </div>

            </div>
        </div>
    )
}

export default ProfileInfo;