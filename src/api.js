import * as axios from 'axios';
import {get} from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
});

export const checkAuthApi = () => {
  return instance(`auth/me`).then( response => response.data);
}

export const getUsersApi = (currentPage, pageSize) => {
  return instance(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}

export const getUserDataApi = (userId) => {
  return instance(`profile/${userId}`).then(response => response.data);
}