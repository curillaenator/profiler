import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { appReducer } from "./Reducers/appReducer";
import { uiReducer } from "./Reducers/uiReducer";
import { welcomeReducer } from "./Reducers/welcomeReducer";
import { findusersReducer } from "./Reducers/findusersReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { notesReducer } from "./Reducers/notesReducer";
import { authReducer } from "./Reducers/authReducer";

const rootReducer = combineReducers({
  app: appReducer,
  welcome: welcomeReducer,
  ui: uiReducer,
  profile: profileReducer,
  notes: notesReducer,
  findusers: findusersReducer,
  auth: authReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
