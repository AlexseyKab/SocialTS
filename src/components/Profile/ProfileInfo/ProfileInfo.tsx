import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://cdn.shazoo.ru/c800x360/258912_Jv7rCOP3Rs_kratos_3_wallpaper_1600x900.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descproption
            </div>
        </div>
    )
}

export default ProfileInfo;