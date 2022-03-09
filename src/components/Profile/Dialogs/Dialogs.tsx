import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageProps from "./MessageProps/MessageProps";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
    onSendMessageClick: (text: string) => void
    onNewMessageChange: (e: any) => void
}

const Dialogs = (props: DialogsPropsType) =>{

    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = props.messages.map(m => <MessageProps message={m.message}/>)

    let addMessage = (values: DialogsDataType) => {
        props.onSendMessageClick(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
               <DialogsForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

type DialogsDataType = {
    newMessageBody: string
}

const AddMessagesForm: React.FC<InjectedFormProps<DialogsDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Введите текст"} />
                </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsForm = reduxForm<DialogsDataType>({
    form: 'AddMessagesForm'
}) (AddMessagesForm)

export default Dialogs;