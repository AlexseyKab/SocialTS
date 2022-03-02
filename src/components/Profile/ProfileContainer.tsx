import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action, Dispatch} from "redux";
import {getProfileThunkCreator, profileType, setUserProfile} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";


type PropsType = mapStateType & mapDispatchPropsType

type ProfilePropsType = RouteComponentProps<PasParamType> & PropsType

type mapDispatchPropsType = {
    getProfileThunkCreator: (userId: string) => void
}
type mapStateType = {
    profile: profileType
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
        profile: state.profilePage.profile
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

