import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action} from "redux";
import {
    currentPageAC,
    followThunkCreator,
    getUsersThunkCreator,
    unfollowThunkCreator,
    UserType
} from "../../Redux/UsersReducer";
import UsersJSX from "./UsersJSX";
import Preloader from "../common/Preloader/Preloader";
import {ThunkDispatch} from "redux-thunk";


type UsersType = {
    users: UserType[]
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    following: Array<number>
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}

class UsersAPI extends React.Component<UsersType> {
    componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersJSX
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                following={this.props.following}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.following

    }
}


let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, void, Action>) => {
    return {
        setCurrentPage: (currentPage: number) => {
            dispatch(currentPageAC(currentPage))
        },

        getUsersThunkCreator: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        unfollowThunkCreator: (userId: number) => {
            dispatch(unfollowThunkCreator(userId))
        },
        followThunkCreator: (userId: number) => {
            dispatch(followThunkCreator(userId))
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
