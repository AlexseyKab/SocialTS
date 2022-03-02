import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action} from "redux";
import {getProfileThunkCreator, profileType} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";


type PropsType = mapStateType & mapDispatchPropsType

type ProfilePropsType = RouteComponentProps<PasParamType> & PropsType

type mapDispatchPropsType = {
    getProfileThunkCreator: (userId: string) => void
}
type mapStateType = {
    profile: profileType
    isAuth: boolean
}

type PasParamType = {
    userId: string

}

class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }

}


let mapStateToProps = (state: AppRootStateType): mapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, void, Action>): mapDispatchPropsType => {
    return {

        getProfileThunkCreator: (userId: string) => {
            dispatch(getProfileThunkCreator(userId))
        },
    }

}

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, mapDispatchToProps) (WithUrlDataComponent);

