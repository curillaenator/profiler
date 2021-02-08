import { profileAPI } from "../../API/api";

const initialState = {
  user: {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
      facebook: null, //
      website: null, //
      vk: null, //
      twitter: null, //
      instagram: null, //
      youtube: null, //
      github: null, //
      mainLink: null, //
    },
    aboutMe: null,
    photos: {
      small: null,
      large: null,
    },
  },
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
    case "UPDATE-USER":
      return {
        ...state,
        user: {
          ...state.user,
          lookingForAJob: action.user.lookingForAJob,
          lookingForAJobDescription: action.user.lookingForAJobDescription,
          fullName: action.user.fullName,
          contacts: action.user.contacts,
        },
      };
    default:
      return state;
  }
};

// ACTIONS

const setUser = (user) => ({ type: "SET-USER", user });
const setStatus = (userId) => ({ type: "SET-STATUS", userId });
const updatePhotoSuccess = (photos) => ({ type: "PHOTO-SUCCESS", photos });
export const updateUser = (user) => ({ type: "UPDATE-USER", user });

// THUNKS

export const requestProfile = (userId) => (dispatch) => {
  profileAPI.requestProfile(userId).then((r) => dispatch(setUser(r)));
};

export const updateProfile = (newUserData) => async (dispatch) => {
  const resp = await profileAPI.updateProfile(newUserData);
  resp.resultCode === 0 && dispatch(updateUser(newUserData));
  return resp;
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
