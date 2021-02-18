import axios from "axios";
import { UserData } from "../Types/Types";

const base = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "ec99cef6-d9e5-4c70-bf87-0c708e349e52" },
  withCredentials: true,
});

export const usersAPI = {
  getUsers: (page: number, pageSize: number) =>
    base.get(`users?page=${page}&count=${pageSize}`).then((r) => r.data),
  follow: (id: number) => base.post(`follow/${id}`).then((r) => r.data),
  unfollow: (id: number) => base.delete(`follow/${id}`).then((r) => r.data),
};

type IsAuthResp = {
  data: { id: number; email: string; login: string };
  resultCode: number;
  messages: Array<string>;
};
type UserDataResp = {
  data: UserData;
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  isAuth: () => base.get<IsAuthResp>("auth/me").then((r) => r.data),
  getAva: (id: number) =>
    base.get(`profile/${id}`).then((r) => r.data.photos.small),
  login: (login: any) => base.post("auth/login", login).then((r) => r.data),
  logout: () => base.delete("auth/login").then((r) => r.data),
};

export const securityAPI = {
  getCaptcha: () => base.get("/security/get-captcha-url").then((r) => r.data),
};

export const profileAPI = {
  requestProfile: (userId: number) =>
    base.get(`profile/${userId}`).then((r) => r.data),
  getStatus: (userId: number) =>
    base.get(`profile/Status/${userId}`).then((r) => r.data),
  setMyStatus: (status: string) =>
    base.put("profile/status", { status }).then((r) => r.data),
  updatePhoto: (photo: any) => {
    const formData = new FormData();
    formData.append("image", photo);
    return base
      .put("profile/photo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => r.data.data);
  },
  updateProfile: (userData: UserData) =>
    base.put("/profile", userData).then((r) => r.data),
};
