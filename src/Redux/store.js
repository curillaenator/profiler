import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { appReducer } from "./Reducers/appReducer";
import { uiReducer } from "./Reducers/uiReducer";
import { findusersReducer } from "./Reducers/findusersReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { notesReducer } from "./Reducers/notesReducer";
import { authReducer } from "./Reducers/authReducer";

const reducers = combineReducers({
  app: appReducer,
  ui: uiReducer,
  profile: profileReducer,
  notes: notesReducer,
  findusers: findusersReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
