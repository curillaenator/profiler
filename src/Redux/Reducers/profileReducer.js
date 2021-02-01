import { profileAPI } from "../../API/api";

const initialState = {
  user: null,
  socials: ["github", "facebook", "vk", "instagram", "youtube"],
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER":
      return { ...state, user: action.user };
    case "SET-STATUS":
      return { ...state, status: action.userId };
    default:
      return state;
  }
};

// ACTIONS

const setUser = (user) => ({ type: "SET-USER", user });
const setStatus = (userId) => ({ type: "SET-STATUS", userId });

// THUNKS

export const getProfile = (userId) => (dispatch) => {
  profileAPI.setProfile(userId).then((r) => dispatch(setUser(r)));
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((r) => dispatch(setStatus(r)));
};
export const updateMyStatus = (status) => (dispatch) => {
  profileAPI
    .setMyStatus(status)
    .then((r) => r.resultCode === 0 && dispatch(setStatus(status)));
  // profileAPI.getStatus()
};
