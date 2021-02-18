import { profileAPI } from "../../API/api";
import { UserData, Photos } from "../../Types/Types";
import { Dispatch } from "redux";

const SET_USER = "profileReducer/SET_USER";
const SET_STATUS = "profileReducer/SET_STATUS";
const PHOTO_SUCCESS = "profileReducer/PHOTO_SUCCESS";
const UPDATE_USER = "profileReducer/UPDATE_USER";

type InitialState = {
  user: UserData;
  status: string;
};

const initialState: InitialState = {
  user: {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    aboutMe: null,
    photos: {
      small: null,
      large: null,
    },
  },
  status: "",
};

type Actions = SetUser | SetStatus | UpdatePhotoSuccess | UpdateUser;

export const profileReducer = (
  state = initialState,
  action: Actions
): InitialState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_STATUS:
      return { ...state, status: action.status };
    case PHOTO_SUCCESS:
      return { ...state, user: { ...state.user, photos: action.photos } };
    case UPDATE_USER:
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

type SetUser = { type: typeof SET_USER; user: UserData };
const setUser = (user: UserData): SetUser => ({ type: SET_USER, user });

type SetStatus = { type: typeof SET_STATUS; status: string };
const setStatus = (status: string): SetStatus => ({ type: SET_STATUS, status });

type UpdatePhotoSuccess = { type: typeof PHOTO_SUCCESS; photos: Photos };
const updatePhotoSuccess = (photos: Photos): UpdatePhotoSuccess => ({
  type: PHOTO_SUCCESS,
  photos,
});

type UpdateUser = { type: typeof UPDATE_USER; user: UserData };
export const updateUser = (user: UserData): UpdateUser => ({
  type: UPDATE_USER,
  user,
});

// THUNKS

export const requestProfile = (userId: number) => async (
  dispatch: Dispatch<Actions>
) => {
  const resp = await profileAPI.requestProfile(userId);
  dispatch(setUser(resp));
};

export const updateProfile = (newUserData: UserData) => async (
  dispatch: Dispatch<Actions>
) => {
  const resp = await profileAPI.updateProfile(newUserData);
  resp.resultCode === 0 && dispatch(updateUser(newUserData));
  return resp;
};

export const requestStatus = (userId: number) => async (
  dispatch: Dispatch<Actions>
) => {
  const resp = await profileAPI.getStatus(userId);
  dispatch(setStatus(resp));
};

export const updateMyStatus = (status: string) => async (
  dispatch: Dispatch<Actions>
) => {
  const resp = await profileAPI.setMyStatus(status);
  resp.resultCode === 0 && dispatch(setStatus(status));
};

export const updatePhoto = (photoFiles: any) => async (
  dispatch: Dispatch<Actions>
) => {
  const resp = await profileAPI.updatePhoto(photoFiles[0]);
  resp.photos && dispatch(updatePhotoSuccess(resp.photos));
};
