import { getUserInfo } from "./authReducer";
import { setMenuHeight } from "./uiReducer";

const INITIALIZE: string = "appReducer/INITIALIZE";

type InitialState = {
  isInitialized: boolean;
};
type InitializeSuccess = {
  type: typeof INITIALIZE;
};

const initialState: InitialState = {
  isInitialized: false,
};

export const appReducer = (
  state = initialState,
  action: InitializeSuccess
): InitialState => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
};

// ACTIONS

const initializeSuccess = (): InitializeSuccess => ({ type: INITIALIZE });

// THUNKS

export const initializeApp = () => (dispatch: any) => {
  const getUserInfoPromise = dispatch(getUserInfo());
  const allPromises = [getUserInfoPromise];
  Promise.all(allPromises).then(() => {
    dispatch(setMenuHeight())
    dispatch(initializeSuccess());
  });
};
