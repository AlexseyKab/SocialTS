import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";
import News from "./components/Profile/News/News";
import {
    AddPostActiveType,
    SendMessageType,
    StateType,
    //store,
    StoreType,
    UpdateMessageType,
    UpdatePostType
} from "./Redux/State";
import store from './Redux/ReduxStore';
import DialogsContaner from "./components/Profile/Dialogs/DialogsContaner";


type AppPropsType = {
    state: StateType
    dispatch: (action: AddPostActiveType | UpdatePostType | UpdateMessageType | SendMessageType) => void
    store: StoreType

    /*   addPost: (m: string) => void
       updateNewPostText: (newPostText: string) => void*/
}


function App(props: AppPropsType) {
    let posts = props.state.profilePage.postData
    let dialogs = props.state.dialogsPage.dialogs
    let messages = props.state.dialogsPage.messages
    let profilePage = props.state.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        posts={posts}
                        dispatch={store.dispatch.bind(store)}
                        /*addPost={props.addPost}*/
                        newPostText={props.state.profilePage.newPostText}
                        /*updateNewPostText={props.updateNewPostText}*/


                    />}/>
                    <Route path="/messages" render={() => <DialogsContaner dialogs={dialogs}
                                                                   store={props.store}
                                                                   messages={messages}/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/news" render={() => <News/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
