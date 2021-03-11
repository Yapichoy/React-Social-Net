export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number,
    fullName: string,
    photos: PhotosType
}
export type UserType = {
    name: string,
    id: number,
    status: string | null,
    followed: boolean,
    photos: PhotosType
}
export type AuthType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

//api.js
export type MeResponseType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodes,
    messages: Array<string>
}