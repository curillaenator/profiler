import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ArtApp from "./ArtApp/ArtApp";
import { store } from "./Redux/store";

import "./index.scss";

const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ArtApp state={state} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderApp(state);
});
