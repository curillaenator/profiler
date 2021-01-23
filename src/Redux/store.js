import { createStore, combineReducers } from "redux";
import { uiReducer } from "./Reducers/uiReducer";
import { findusersReducer } from "./Reducers/findusersReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { postsReducer } from "./Reducers/postsReducer";
import { authReducer } from "./Reducers/authReducer";

const reducers = combineReducers({
  ui: uiReducer,
  profile: profileReducer,
  posts: postsReducer,
  findusers: findusersReducer,
  auth: authReducer,
});

export const store = createStore(reducers);

window.store = store;
