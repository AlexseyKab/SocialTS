import React from "react";
import { UserType} from "../../Redux/UsersReducer";
import s from './user.module.css'

type UsersType ={
    follow: (userId: number)=> void
    setUsers: (users: any)=> void
    unfollow: (userId: number)=> void
    users: UserType[]
}


const Users = (props: UsersType) => {
    debugger
    return <div >
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photoUrl}  className={s.photo}/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users