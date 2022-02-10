import {ActionsType, DialogsPageType} from "./State";

export const DialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        //this._state.dialogsPage.newMessageBody = action.body
       // this._rerenderEntireTree(this._state);

        return {
            ...state,
            newMessageBody: action.body,
        }
    } else if (action.type === 'SEND-MESSAGE') {
        return {
            ...state,
            messages: state.messages.concat({id: 5, message: state.newMessageBody}),
            newMessageBody: ''
        }
        //let body = this._state.dialogsPage.newMessageBody
        //this._state.dialogsPage.newMessageBody = ''
       // this._state.dialogsPage.messages.push({id: 5, message: body})
        //this._rerenderEntireTree(this._state);
    }


    return state
}