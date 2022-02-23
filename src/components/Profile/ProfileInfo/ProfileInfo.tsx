import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {profileType} from "../../../Redux/ProfileReducer";

type ProfileInfoType = {
    profile: profileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://cdn.shazoo.ru/c800x360/258912_Jv7rCOP3Rs_kratos_3_wallpaper_1600x900.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                ava + descproption
            </div>
        </div>
    )
}

export default ProfileInfo;