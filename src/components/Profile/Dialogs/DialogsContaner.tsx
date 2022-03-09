import React from "react";
import Dialogs, {DialogsType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../Redux/State";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRederict";

type MSTType = {
    newMessageBody: string
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    isAuth: boolean
}
type MDTType = {
    onNewMessageChange: (e: any) => void
    onSendMessageClick: (text: string) => void
}


let mapStateToProps = (state: AppRootStateType): MSTType => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
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

export default compose<React.ComponentType>(
    connect<MSTType, MDTType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
) (Dialogs)




