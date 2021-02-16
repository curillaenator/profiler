import { authAPI, securityAPI } from "../../API/api";

const USERDATA: string = "authReducer/USER-DATA";
const USERAVA: string = "authReducer/USER-AVA";
const AFTERLOGOUT: string = "authReducer/AFTER-LOGOUT";
const GETCAPTCHA: string = "authReducer/GETCAPTCHA";

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  ava: null as string | null,
  captcha: null as string | null,
};

type InitialState = typeof initialState

export const authReducer = (
  state = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case USERDATA:
      return { ...state, ...action.userData, isAuth: true };
    case USERAVA:
      return { ...state, ava: action.ava };
    case AFTERLOGOUT:
      return action.nullUser;
    case GETCAPTCHA:
      return { ...state, captcha: action.captchaUrl };
    default:
      return state;
  }
};

// ACTIONS

type UserData = {
  id: number;
  email: string;
  login: string;
};
type GetUserData = {
  type: typeof USERDATA;
  userData: UserData;
};
const getUserData = (userData: UserData): GetUserData => ({
  type: USERDATA,
  userData,
});

type GetUserAva = {
  type: typeof USERAVA;
  ava: string;
};
const getUserAva = (ava: string): GetUserAva => ({ type: USERAVA, ava });

type AfterLogout = {
  type: typeof AFTERLOGOUT;
  nullUser: InitialState;
};
const afterLogout = (nullUser: InitialState): AfterLogout => ({
  type: AFTERLOGOUT,
  nullUser,
});

type Captcha = {
  type: typeof GETCAPTCHA;
  captchaUrl: string | null;
};
const captcha = (captchaUrl: string | null): Captcha => ({
  type: GETCAPTCHA,
  captchaUrl,
});

// THUNKS

export const getCaptcha = () => (dispatch: any) => {
  securityAPI.getCaptcha().then((resp: any) => {
    dispatch(captcha(resp.url));
  });
};

export const getUserInfo = () => (dispatch: any) => {
  return authAPI.isAuth().then((resp: any) => {
    if (resp.resultCode === 0) {
      dispatch(getUserData(resp.data));
      authAPI
        .getAva(resp.data.id)
        .then((resp2: any) => dispatch(getUserAva(resp2)));
    }
  });
};

type Login = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export const login = (login: Login) => (dispatch: any) => {
  return authAPI.login(login).then((resp: any) => {
    if (resp.resultCode === 0) {
      dispatch(getUserInfo());
      dispatch(captcha(null));
    }
    return resp;
  });
};

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((resp: any) => {
    if (resp.resultCode === 0) dispatch(afterLogout(initialState));
  });
};
