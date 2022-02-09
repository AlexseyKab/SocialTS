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
}

const Dialogs = (props: DialogsPropsType) =>{

    const state = props.store.getState().dialogsPage

    let dialogsElement = props.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/> )
    let messegesElement = props.messages.map( m => <MessageProps message={m.message}/> )
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messegesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={"Введите текст"}/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;