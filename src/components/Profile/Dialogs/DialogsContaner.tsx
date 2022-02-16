import React from "react";
import Dialogs, {DialogsType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageAC, StateType, updateNewMessageBodyAC} from "../../../Redux/State";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {Dispatch} from "redux";


/*const DialogsContaner = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messegesElement = props.messages.map(m => <MessageProps message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs

            messages={props.messages}
            dialogs={props.dialogs}
            store={props.store}
            dialogsElement={dialogsElement}
            messegesElement={messegesElement}
            newMessageBody={newMessageBody}
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}

        />
    )
}*/

let mapStateToProps = (state: AppRootStateType): MSTType => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MDTType => {
    return {
        onNewMessageChange: (value) => {
            dispatch(updateNewMessageBodyAC(value))
        },
        onSendMessageClick: (text: string) => {
            dispatch(sendMessageAC(text))
        }
    }
}

const DialogsContaner = connect<MSTType, MDTType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContaner;

type MSTType = {
    newMessageBody: string
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}
type MDTType = {
    onNewMessageChange: (e: any) => void
    onSendMessageClick: (text: string) => void
}
