const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER-DATA":
      return { ...state, ...action.userData, isAuth: true };

    default:
      return state;
  }
};

export const userData = (userData) => ({ type: "USER-DATA", userData });
