import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {dataType, setUsersDataAC} from "../../Redux/authReducer";

type HeaderProps = {
    setUsersDataAC: (data: dataType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {

            if (response.data.resultCode === 0) {
                this.props.setUsersDataAC(response.data.data)
            }
        })
    }

    render() {
        return (
            <Header
                {...this.props}
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        )
    }

}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsersDataAC: (data: dataType) => {
            dispatch(setUsersDataAC(data))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (HeaderContainer);