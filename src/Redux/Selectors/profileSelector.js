import { createSelector } from "reselect";

const getUserPrim = (state) => state.profile.user;
export const getUser = createSelector(getUserPrim, (user) => user);

export const getSocials = (state) => state.profile.socials;

export const getStatus = (state) => state.profile.status;
