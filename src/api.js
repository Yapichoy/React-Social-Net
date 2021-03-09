import * as axios from 'axios';
import {get} from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a7762e8f-5d37-4972-b7e0-bacd77575f7b'
  }
});

export const checkAuthApi = () => {
  return instance.get(`auth/me`).then( response => response.data);
}

export const getUsersApi = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}

export const getUserDataApi = (userId) => {
  return instance.get(`profile/${userId}`).then(response => response.data);
}

export const followApi = (userId) => {
  return instance.post(`follow/${userId}`).then(response => response.data);
}

export const unfollowApi = (userId) => {
  return instance.delete(`follow/${userId}`).then(response => response.data);
}