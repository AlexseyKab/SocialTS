import  axios from "axios";
import React from "react";
import { UserType} from "../../Redux/UsersReducer";
import s from './user.module.css'
import userPhoto from '../../assets/images/thumb-1920-288376.jpg'


type UsersType ={
    follow: (userId: number)=> void
    setUsers: (users: any)=> void
    unfollow: (userId: number)=> void
    users: UserType[]
}


const Users = (props: UsersType) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })


    }



    return <div >
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}  className={s.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button>
                            : <button onClick={()=>{ props.follow(u.id) }}>Unfollow</button>}

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

export default Users



//--------------------------------------------------------------
/* {id: 1, followed: false,
                    photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
                    fullName: 'Dmitry', status: "I am boss", location: {city: "Minsk", country: "Belarus"} },
                {id: 2, followed: true,
                    photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
                    fullName: 'Sasha', status: "I am boss too", location: {city: "Moscow", country: "Russia"} },
                {id: 3, followed: false,
                    photoUrl: 'https://avatarfiles.alphacoders.com/288/thumb-1920-288376.jpg',
                    fullName: 'Andrey',status: "I am boss too", location: {city: "Kiev", country: "Ukraine"} },*/