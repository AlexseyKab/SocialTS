import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/Validators/validators";
import {Input} from "../common/FormsControle/FormsControls";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {loginThunk, logoutThunk} from "../../Redux/authReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../Redux/Redux-Store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

let maxLength = maxLengthCreator(10)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props ) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={"login"} component={Input} validate={[requiredField, maxLength]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={"password"} type={'password'} component={Input} validate={[requiredField, maxLength]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
}) (LoginForm)

type LoginType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.login,  formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, void, Action>) => {
    return {
        loginThunk: (email: string, password: string, rememberMe: boolean) => {
            dispatch(loginThunk(email, password, rememberMe))
        },

        logoutThunk: () => {
            dispatch(logoutThunk())
        }
    }
}

export default connect (null, mapDispatchToProps) (Login)