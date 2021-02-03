import { authAPI } from "../../API/api";
// import { FORM_ERROR } from "final-form";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  ava: null,
  // authMessage: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER-DATA":
      return { ...state, ...action.userData, isAuth: true };
    case "USER-DATA-AVA":
      return { ...state, ava: action.ava };
    case "AFTER-LOGOUT":
      return action.nullUser;
    // case "ERROR-MESSAGE":
    //   return { ...state, authMessage: action.message };
    default:
      return state;
  }
};

// ACTIONS

const getUserData = (userData) => ({ type: "USER-DATA", userData });
// const authMessage = (message) => ({ type: "ERROR-MESSAGE", message });
const getUserAva = (ava) => ({ type: "USER-DATA-AVA", ava });
const afterLogout = (nullUser) => ({ type: "AFTER-LOGOUT", nullUser });

// THUNKS

export const getUserInfo = () => (dispatch) => {
  return authAPI.isAuth().then((r1) => {
    if (r1.resultCode === 0) {
      dispatch(getUserData(r1.data));
      // authAPI.getAva(r1.data.id).then((r2) => dispatch(getUserAva(r2)));
    }
  });
};

export const login = (login) => (dispatch) => {
  authAPI.login(login).then((r) => {
    if (r.resultCode === 0) dispatch(getUserInfo());
    // dispatch(authMessage(r.messages));
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((r) => {
    if (r.resultCode === 0) dispatch(afterLogout(initialState));
  });
};
