import { createSelector } from "reselect";

const getUsersInitial = (state) => state.findusers.users;
export const getUsers = createSelector(getUsersInitial, (users) =>
  users.map((u) => u)
);

export const getPageSize = (state) => state.findusers.pageSize;
export const getPageQuant = (state) => state.findusers.pageQuant;
export const getCurrentQuant = (state) => state.findusers.currentQuant;
export const getTotalUsers = (state) => state.findusers.totalUsers;
export const getCurrentPage = (state) => state.findusers.currentPage;
export const getIsFetching = (state) => state.findusers.isFetching;
export const getWhileFollow = (state) => state.findusers.whileFollow;
