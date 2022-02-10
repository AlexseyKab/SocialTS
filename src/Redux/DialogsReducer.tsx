import {ActionsType, DialogsPageType} from "./State";

let initializationState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sveta'},
    ],
        messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'It-incubator'},
    {id: 4, message: 'it-kamasutra'},
],
    newMessageBody: ''
}

export const DialogsReducer = (state: DialogsPageType = initializationState, action: ActionsType): DialogsPageType => {
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