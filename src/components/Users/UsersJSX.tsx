import React from "react";
import s from "./user.module.css";
import userPhoto from "../../assets/images/thumb-1920-288376.jpg";
import {UserType} from "../../Redux/UsersReducer";
import { NavLink } from "react-router-dom";
import {globalAPI} from "../../API/API-TS";

type UsersTSXprops = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (currentPage: number) => void
    toggleFollowProgress: (isFetching: boolean, userId: number) => void
    following: Array<number>
}

const UsersJSX = (props: UsersTSXprops) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'./profile/' + u.id}>
                             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.following.some(id => id === u.id)}  onClick={() => {

                                props.toggleFollowProgress(true, u.id)
                                globalAPI.getUnfollow(u.id).then(data => {
                                   if (data.resultCode === 0) {
                                       props.unfollow(u.id)
                                   }
                                    props.toggleFollowProgress(false, u.id)
                                })


                            }}>Unfollow</button>
                            : <button disabled={props.following.some(id => id === u.id)} onClick={() => {

                                props.toggleFollowProgress(true, u.id)
                                globalAPI.detFollow(u.id).then(data=> {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowProgress(false, u.id)
                                })

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default UsersJSX