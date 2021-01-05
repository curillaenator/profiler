import { createStore, combineReducers } from "redux";
import { uiReducer } from "./Reducers/uiReducer";
import { profileReducer } from "./Reducers/profileReducer";

const reducers = combineReducers({
  ui: uiReducer,
  profile: profileReducer,
});

export const store = createStore(reducers);

window.state = store.getState();
