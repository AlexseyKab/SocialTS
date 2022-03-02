import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {profileType, setUserProfile} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {globalAPI} from "../../API/API-TS";
import {followAC, toggleFollowProgress} from "../../Redux/UsersReducer";


type PropsType = mapStateType & mapDispatchPropsType

type ProfilePropsType = RouteComponentProps<PasParamType> & PropsType

type mapDispatchPropsType = {
    setUserProfile: (profile: profileType) => void
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
        globalAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
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

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setUserProfile: (profile: profileType) => {
            dispatch(setUserProfile(profile))
        },
    }

}

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, mapDispatchToProps) (WithUrlDataComponent);

