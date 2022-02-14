import React, {FC} from "react";
import s from "./Post.module.css"

export type propsPost = {
    message: string
    value: number
}

const Post:FC<propsPost> = (props) => {


    return (
        <div className={s.item}>
            <img src="https://psn100.net/img/avatar/2e48ef2b3fde68e5e8b24e1c7c7ca1ca.png"/>
            <div>{props.message}</div>
            <div>
            <span>like {props.value}</span>
            </div>
        </div>
    )
}

export default Post;

