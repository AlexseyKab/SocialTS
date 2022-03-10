import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "d7fc70fd-6aec-456b-80d7-34c2364c0cf6"
    }
})

export const globalAPI = {
    getUsers (currentPage: number, pageSize: number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    },
    getAutMe () {
        return instance.get(`auth/me`)
            .then(responce => {
                return responce.data
            })
    },
    getUnfollow (id: number)  {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    detFollow  (id: number) {
        return   instance.post(`follow/${id}`, {},)
            .then(responce => {
                return responce.data
            })
    },
    getProfile (userId: string) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get(`profile/` + userId)
            .then(responce => {
                return responce.data
            })
    },
    getStatus (userId: string) {
        return instance.get('profile/status/' + userId)
            .then(responce => {
                return responce.data
            })
    },
    updateStatus (status: string) {
        return instance.put('profile/status', {status: status})
            .then(responce => {
                return responce.data
            })
    },

    login (email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', { email, password, rememberMe })
            .then(responce => responce.data)
    },

    logout () {
        return instance.delete('auth/login')
            .then(responce => {
                return responce.data
            })
    }
}

