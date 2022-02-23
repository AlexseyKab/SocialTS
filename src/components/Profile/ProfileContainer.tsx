import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {profileType, setUserProfile} from "../../Redux/ProfileReducer";


type ProfilePropsType = {
    setUserProfile: (profile: profileType) => void
    profile: profileType
}

class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
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

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: profileType) => {
            dispatch(setUserProfile(profile))
        },
    }

}

export default connect (mapStateToProps, mapDispatchToProps) (ProfileContainer);