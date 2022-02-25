import axios from "axios";

const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    })
        .then(responce => {
            return responce.data
        })
}

export default getUsers;


export const getAutMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
        .then(responce => {
            return responce.data
        })
}

export const getUnfollow = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "d7fc70fd-6aec-456b-80d7-34c2364c0cf6"
        }
    })
        .then(responce => {
            return responce.data
        })
}

export const detFollow = (id: number) => {
    return   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "d7fc70fd-6aec-456b-80d7-34c2364c0cf6"
        }
    })
        .then(responce => {
            return responce.data
        })
}
