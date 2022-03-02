import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action} from "redux";
import {getAutThunk} from "../../Redux/authReducer";
import {ThunkDispatch} from "redux-thunk";


type HeaderProps = {
    isAuth: boolean
    login: string | null
    getAutThunk: () => void
}

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {

       this.props.getAutThunk()
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

let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, void, Action>) => {
    return {
        getAutThunk: () => {
            dispatch(getAutThunk())
        }
    }
}



export default connect (mapStateToProps, mapDispatchToProps) (HeaderContainer);