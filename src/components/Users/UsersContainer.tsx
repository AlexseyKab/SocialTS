import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {currentPageAC, followAC, setUsersAC, setUsersTotalCounterAC, unfollowAC} from "../../Redux/UsersReducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(currentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCounterAC(totalCount))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersClass)