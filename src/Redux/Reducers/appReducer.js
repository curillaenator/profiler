import { getUserInfo } from "./authReducer";

const initialState = {
  isInitialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, isInitialized: true };

    default:
      return state;
  }
};

// ACTIONS

const initializeSuccess = () => ({ type: "INITIALIZE" });

// THUNKS

export const initializeApp = () => (dispatch) => {
  const getUserInfoPromise = dispatch(getUserInfo());
 
  const allPromises = [getUserInfoPromise];
  Promise.all(allPromises).then(() => dispatch(initializeSuccess()));
};
