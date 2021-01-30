import * as axios from "axios";

const base = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e5568338-8ed9-4866-83b9-a05a28bebc1d" },
  withCredentials: true,
});

export const usersAPI = {
  getUsers: (page, pageSize) =>
    base.get(`users?page=${page}&count=${pageSize}`).then((r) => r.data),
  follow: (id) => base.post(`follow/${id}`).then((r) => r.data),
  unfollow: (id) => base.delete(`follow/${id}`).then((r) => r.data),
};

export const authAPI = {
  isAuth: () => base.get("auth/me").then((r) => r.data),
  getAva: (id) => base.get(`profile/${id}`).then((r) => r.data.photos.small),
};

export const profileAPI = {
  setProfile: (userId) =>
    base.get(`profile/${userId}`).then((r) => r.data),
};
