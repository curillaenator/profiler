import { authAPI } from "../../API/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  ava: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER-DATA":
      return { ...state, ...action.userData, isAuth: true };
    case "USER-DATA-AVA":
      return { ...state, ava: action.ava };
    default:
      return state;
  }
};

// ACTIONS

const userData = (userData) => ({ type: "USER-DATA", userData });
const userAva = (ava) => ({ type: "USER-DATA-AVA", ava });

// THUNKS

export const getUserInfo = () => (dispatch) => {
  authAPI.isAuth().then((r1) => {
    if (r1.resultCode === 0) {
      dispatch(userData(r1.data));
      authAPI.getAva(r1.data.id).then((r2) => dispatch(userAva(r2)));
    }
  });
};
