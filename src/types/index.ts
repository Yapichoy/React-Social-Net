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