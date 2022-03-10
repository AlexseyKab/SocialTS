import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/Validators/validators";
import {Textarea} from "../../common/FormsControle/FormsControls";

export type typeMyPostProps = {
    postData: Array<typePostData>
    newPostText: string
    onPostChange: (postText: string) => void
    addPost: (text: string) => void
}

export type typePostData = {
    id: number
    message: string
    value: number

}



const MyPosts = (props: typeMyPostProps) => {

    let postElements: Array<JSX.Element> = props.postData.map(p => <Post message={p.message} value={p.value}/>)
/*

    function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
        props.onPostChange(ev.currentTarget.value)
    }
*/

    function addPost(values: AddMyPostType) {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.description}>
            <div>
                My posts
            </div>
            <AddMyPostRedux onSubmit={addPost}/>
            <div className={s.posts}>
                <h3>New post</h3>
            </div>
            {postElements}
        </div>
    )
}
type AddMyPostType = {
    newPostText: string
}

let maxLength = maxLengthCreator(10)

const AddMyPost: React.FC<InjectedFormProps<AddMyPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Введите текст"} validate={[requiredField, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostRedux = reduxForm<AddMyPostType>({
    form: 'newPostText'
}) (AddMyPost)

export default MyPosts;
