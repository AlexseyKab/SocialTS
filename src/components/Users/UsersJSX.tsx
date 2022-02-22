import React from "react";
import s from "./user.module.css";
import userPhoto from "../../assets/images/thumb-1920-288376.jpg";
import {UserType} from "../../Redux/UsersReducer";

type UsersTSXprops = {
    users: UserType[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (currentPage: number) => void
}

const UsersJSX = (props: UsersTSXprops) => {
    console.log(props.totalUsersCount)
    console.log(props.pageSize)

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log(pageCount)
    console.log("Test")

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}

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