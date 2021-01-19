import { createStore, combineReducers } from "redux";
import { uiReducer } from "./Reducers/uiReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { postsReducer } from "./Reducers/postsReducer";

const reducers = combineReducers({
  ui: uiReducer,
  profile: profileReducer,
  posts: postsReducer,
});

export const store = createStore(reducers);

window.store = store;
