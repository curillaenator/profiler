import { createSelector } from "reselect";
import { AppStateType } from "../store";

const getUsersInitial = (state: AppStateType) => state.findusers.users;
export const getUsers = createSelector(getUsersInitial, (users) =>
  users.map((u) => u)
);

export const getPageSize = (state: AppStateType) => state.findusers.pageSize;
export const getPageQuant = (state: AppStateType) => state.findusers.pageQuant;
export const getCurrentQuant = (state: AppStateType) => state.findusers.currentQuant;
export const getTotalUsers = (state: AppStateType) => state.findusers.totalUsers;
export const getCurrentPage = (state: AppStateType) => state.findusers.currentPage;
export const getIsFetching = (state: AppStateType) => state.findusers.isFetching;
export const getWhileFollow = (state: AppStateType) => state.findusers.whileFollow;
