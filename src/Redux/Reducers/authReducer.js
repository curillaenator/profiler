import { authAPI, securityAPI } from "../../API/api";

const USERDATA = "authReducer/USER-DATA";
const USERAVA = "authReducer/USER-AVA";
const AFTERLOGOUT = "authReducer/AFTER-LOGOUT";
const GETCAPTCHA = "authReducer/GETCAPTCHA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  ava: null,
  captcha: null,
};

export const authReducer = (state = initialState, action) => {
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

const getUserData = (userData) => ({ type: USERDATA, userData });
const getUserAva = (ava) => ({ type: USERAVA, ava });
const afterLogout = (nullUser) => ({ type: AFTERLOGOUT, nullUser });
const captcha = (captchaUrl) => ({ type: GETCAPTCHA, captchaUrl });

// THUNKS

export const getCaptcha = () => (dispatch) => {
  securityAPI.getCaptcha().then((r) => {
    dispatch(captcha(r.url));
  });
};

export const getUserInfo = () => (dispatch) => {
  return authAPI.isAuth().then((resp) => {
    if (resp.resultCode === 0) {
      dispatch(getUserData(resp.data));
      authAPI.getAva(resp.data.id).then((r2) => dispatch(getUserAva(r2)));
    }
  });
};

export const login = (login) => (dispatch) => {
  return authAPI.login(login).then((r) => {
    if (r.resultCode === 0) {
      dispatch(getUserInfo());
      dispatch(captcha(null));
    }
    return r;
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((r) => {
    if (r.resultCode === 0) dispatch(afterLogout(initialState));
  });
};
