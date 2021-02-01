import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { uiReducer } from "./Reducers/uiReducer";
import { findusersReducer } from "./Reducers/findusersReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { postsReducer as notesReducer } from "./Reducers/notesReducer";
import { authReducer } from "./Reducers/authReducer";

const reducers = combineReducers({
  ui: uiReducer,
  profile: profileReducer,
  notes: notesReducer,
  findusers: findusersReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
