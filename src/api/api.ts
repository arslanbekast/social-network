import axios from "axios";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {PhotosType, ProfileType} from "../redux/profile-reducer";
import {UserType} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<BaseResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete<BaseResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponseType>(`profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put<BaseResponseType<{photos: PhotosType}>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response.data)
    },
    saveProfile(profile: ProfileDataFormType) {
        return instance.put<BaseResponseType>(`profile`, profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get<BaseResponseType<GetAuthMeResponseData>>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<BaseResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<BaseResponseType>(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{url: string}>(`security/get-captcha-url`)
            .then(response => response.data)
    }
}


type FieldErrorType = {
    error: string;
    field: string;
};

export type BaseResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    data: D;
    fieldsErrors: FieldErrorType[];
};

type GetUsersResponse = {
    items: UserType[]
    totalCount: number
    error: string
}

type GetAuthMeResponseData = {
    id: number
    email: string
    login: string
}
