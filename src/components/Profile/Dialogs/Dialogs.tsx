import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageProps from "./MessageProps/MessageProps";
import {sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../../Redux/State";

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
    store: StoreType
    messegesElement: any
    newMessageBody: any
    onSendMessageClick: ()=> void
    onNewMessageChange: (e: any)=> void
    dialogsElement: any
}

const Dialogs = (props: DialogsPropsType) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{props.messegesElement}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   onChange={props.onNewMessageChange}
                                   placeholder={"Введите текст"}/></div>
                    <div><button onClick={props.onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;