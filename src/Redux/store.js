import { createStore, combineReducers } from "redux";
import { uiReducer } from "./Reducers/ui";

const reducers = combineReducers({
  ui: uiReducer,
});

export const store = createStore(reducers);
