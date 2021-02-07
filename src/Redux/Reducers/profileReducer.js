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
    case "PHOTO-SUCCESS":
      return { ...state, user: { ...state.user, photos: action.photos } };
    default:
      return state;
  }
};

// ACTIONS

const setUser = (user) => ({ type: "SET-USER", user });
const setStatus = (userId) => ({ type: "SET-STATUS", userId });
const updatePhotoSuccess = (photos) => ({ type: "PHOTO-SUCCESS", photos });

// THUNKS

export const requestProfile = (userId) => (dispatch) => {
  profileAPI.setProfile(userId).then((r) => dispatch(setUser(r)));
};
export const requestStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((r) => dispatch(setStatus(r)));
};
export const updateMyStatus = (status) => (dispatch) => {
  profileAPI
    .setMyStatus(status)
    .then((r) => r.resultCode === 0 && dispatch(setStatus(status)));
};
export const updatePhoto = (photos) => async (dispatch) => {
  const resp = await profileAPI.updatePhoto(photos[0]);
  console.log(resp);
  resp.photos && dispatch(updatePhotoSuccess(resp.photos));
};
