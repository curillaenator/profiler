import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ArtApp from "./ArtApp/ArtApp";
import { store } from "./Redux/store";

import "./index.scss";

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ArtApp />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

