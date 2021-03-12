import axios from 'axios';
import {MeResponseType} from "./types";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a7762e8f-5d37-4972-b7e0-bacd77575f7b'
  }
});

export const checkAuthApi = () => {
  return instance.get<MeResponseType>(`auth/me`).then( response => response.data);
}

export const getUsersApi = (currentPage: number, pageSize: number, term: string, friend: null | boolean = null) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`+(friend === null ? '' : `&friend=${friend}`)).then(response => response.data);
}

export const getUserDataApi = (userId: number) => {
  return instance.get(`profile/${userId}`).then(response => response.data);
}

export const followApi = (userId: number) => {
  return instance.post(`follow/${userId}`).then(response => response.data);
}

export const unfollowApi = (userId: number) => {
  return instance.delete(`follow/${userId}`).then(response => response.data);
}
export const followUnfollowApi = {
  followApi(userId: number) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollowApi(userId: number) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
}
export const profileApi = {
  setStatus: (status: string) => instance.put(`/profile/status`, {status}).then(response => response.data),
  getStatus: (uid: number) => instance.get(`/profile/status/${uid}`).then(response => response.data),
  setPhoto: (file: any) => {
    const req = new FormData();
    req.append('image', file);
    return instance.put(`/profile/photo/`, req, {headers: {'COntent-Type': 'multipart/form-data'}}).then(response => response.data)
  }

}
type AuthDataType = {
  email: string,
  password: string,
  rememberMe: boolean
}
export const authApi = {
  login: (formData: AuthDataType) => instance.post('auth/login', {...formData}).then(response => response.data),
  logout: () => instance.delete('auth/login').then(resp => resp.data)
}