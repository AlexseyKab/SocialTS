import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {
    currentPageAC,
    followAC,
    setUsersAC,
    setUsersTotalCounterAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../Redux/UsersReducer";
import axios from "axios";
import UsersJSX from "./UsersJSX";

import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../API/API-TS";

type UsersType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersAPI extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data=> {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
                /*isFetching={this.props.isFetching}*/
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
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
