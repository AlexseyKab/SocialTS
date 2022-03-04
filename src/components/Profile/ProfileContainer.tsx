import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action, compose} from "redux";
import {getProfileThunkCreator, getStatus, profileType} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {withAuthRedirect} from "../../HOC/withAuthRederict";


type PropsType = mapStateType & mapDispatchPropsType

type ProfilePropsType = RouteComponentProps<PasParamType> & PropsType

type mapDispatchPropsType = {
    getProfileThunkCreator: (userId: string) => void
    getStatus: (userId: string) => void
}
type mapStateType = {
    profile: profileType
    status: string
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
        this.props.getStatus(userId)
    }

    render() {
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
        status: state.profilePage.status
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, void, Action>): mapDispatchPropsType => {
    return {

        getProfileThunkCreator: (userId: string) => {
            dispatch(getProfileThunkCreator(userId))
        },
        getStatus: (userId: string) => {
            dispatch(getStatus(userId))
        }
    }

}

export default compose<React.ComponentType>(connect (mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect,) (ProfileContainer)

