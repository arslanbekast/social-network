import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    createFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}