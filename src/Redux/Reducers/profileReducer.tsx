import { profileAPI } from "../../API/api";

const SET_USER: string = "profileReducer/SET_USER";
const SET_STATUS: string = "profileReducer/SET_STATUS";
const PHOTO_SUCCESS: string = "profileReducer/PHOTO_SUCCESS";
const UPDATE_USER: string = "profileReducer/UPDATE_USER";

const initialState = {
  user: {
    userId: null as number | null,
    lookingForAJob: null as boolean | null,
    lookingForAJobDescription: null as string | null,
    fullName: null as string | null,
    contacts: {
      facebook: null as string | null,
      website: null as string | null,
      vk: null as string | null,
      twitter: null as string | null,
      instagram: null as string | null,
      youtube: null as string | null,
      github: null as string | null,
      mainLink: null as string | null,
    },
    aboutMe: null as string | null,
    photos: {
      small: null as string | null,
      large: null as string | null,
    },
  },
  status: "" as string,
};

type InitialState = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
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
type User = typeof initialState.user;
type SetUser = { type: typeof SET_USER; user: User };
const setUser = (user: User): SetUser => ({ type: SET_USER, user });

type SetStatus = { type: typeof SET_STATUS; status: string };
const setStatus = (status: string): SetStatus => ({ type: SET_STATUS, status });

type Photos = typeof initialState.user.photos;
type UpdatePhotoSuccess = { type: typeof PHOTO_SUCCESS; photos: Photos };
const updatePhotoSuccess = (photos: Photos): UpdatePhotoSuccess => ({
  type: PHOTO_SUCCESS,
  photos,
});

type UpdateUser = { type: typeof UPDATE_USER; user: any };
export const updateUser = (user: any): UpdateUser => ({
  type: UPDATE_USER,
  user,
});

// THUNKS

export const requestProfile = (userId: number) => (dispatch: any) => {
  profileAPI
    .requestProfile(userId)
    .then((resp: any) => dispatch(setUser(resp)));
};

// newUserData = initialState.user without photos
export const updateProfile = (newUserData: any) => async (dispatch: any) => {
  const resp = await profileAPI.updateProfile(newUserData);
  resp.resultCode === 0 && dispatch(updateUser(newUserData));
  return resp;
};

export const requestStatus = (userId: number) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((resp: any) => dispatch(setStatus(resp)));
};

export const updateMyStatus = (status: string) => (dispatch: any) => {
  profileAPI
    .setMyStatus(status)
    .then((resp: any) => resp.resultCode === 0 && dispatch(setStatus(status)));
};


export const updatePhoto = (photoFiles: any) => async (dispatch: any) => {
  const resp = await profileAPI.updatePhoto(photoFiles[0]);
  resp.photos && dispatch(updatePhotoSuccess(resp.photos));
};
