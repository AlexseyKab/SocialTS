import axios from "axios";

type getUsersProps = {

}

const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
        withCredentials: true,
    })
}

export default getUsers