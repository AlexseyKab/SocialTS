import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageProps from "./MessageProps/MessageProps";
import {Redirect} from "react-router-dom";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    message: string
}

export type DialogsPropsType = {
    messages: Array<MessageType>
     dialogs: Array<DialogsType>
    newMessageBody: string
    onSendMessageClick: (text: string)=> void
    onNewMessageChange: (e: any)=> void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) =>{

    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messegesElement = props.messages.map(m => <MessageProps message={m.message}/>)

    function handlerChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.onNewMessageChange(e.currentTarget.value)
    }

    function handlerClick() {
        props.onSendMessageClick(props.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messegesElement}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   onChange={handlerChange}
                                   placeholder={"Введите текст"}/></div>
                    <div><button onClick={handlerClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;