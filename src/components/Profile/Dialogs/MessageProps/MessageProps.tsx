import React from "react";
import s from './MessageProps.module.css'


export type MessagePropsType = {
    message: string
}

const MessageProps = (props: MessagePropsType) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

export default MessageProps;