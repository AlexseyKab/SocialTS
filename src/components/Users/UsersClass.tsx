import React from "react";
import userPhoto from "../../assets/images/thumb-1920-288376.jpg";
import s from "./user.module.css";
import axios from "axios";
import {UserType} from "../../Redux/UsersReducer";


type UsersType = {
    follow: (userId: number) => void
    setUsers: (users: any) => void
    unfollow: (userId: number) => void
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void


}

class UsersClass extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectPage : ''}
                                 onClick={(e) => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}


export default UsersClass


