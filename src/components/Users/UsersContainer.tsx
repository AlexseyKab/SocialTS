import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Action} from "redux";
import {currentPageAC, followAC, toggleFollowProgress, unfollowAC, UserType, getUsersThunkCreator} from "../../Redux/UsersReducer";
import UsersJSX from "./UsersJSX";
import Preloader from "../common/Preloader/Preloader";
import {ThunkDispatch} from "redux-thunk";


type UsersType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowProgress: (isFetching: boolean, userId: number) => void
    following: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void

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
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                toggleFollowProgress={this.props.toggleFollowProgress}
                following={this.props.following}

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
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },

        setCurrentPage: (currentPage: number) => {
            dispatch(currentPageAC(currentPage))
        },

        toggleFollowProgress: (following: boolean, userId: number) => {
            dispatch(toggleFollowProgress(following, userId))
        },
        getUsersThunkCreator: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
