import { useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { store } from "../Redux/store";
import { logout } from "../Redux/Reducers/authReducer";
import { initializeApp } from "./../Redux/Reducers/appReducer";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { PrimaryDivider } from "./UIComponents/Dividers/Dividers";
import Loader from "./UIComponents/Loader/Loader";

import "../index.scss";

const App = (props) => {
  //server Error
  const catchRejectedAsyncs = (e) => {
    alert("Ошибка сервера: " + e.reason);
  };

  useEffect(() => {
    window.addEventListener("unhandledrejection", catchRejectedAsyncs);
    return window.removeEventListener(
      "unhandledrejection",
      catchRejectedAsyncs
    );
  });

  const { initializeApp, isInitialized, ...dimProps } = props;
  useEffect(() => initializeApp(), [initializeApp]);

  if (!isInitialized) return <Loader />;

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <div className="artapp">
        <Header {...dimProps} />
        <Content />
        <PrimaryDivider height="40px" />
      </div>
    </HashRouter>
  );
};

const mstp = (state) => ({
  // APP INIT
  isInitialized: state.app.isInitialized,
  // FOR HEADER
  search: state.ui.icons.search,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  avatarInit: state.auth.ava,
  // FOR CONTENT
  // ...
});
const AppCont = connect(mstp, { initializeApp, logout })(App);

const ArtApp = () => {
  return (
    <Provider store={store}>
      <AppCont />
    </Provider>
  );
};
export default ArtApp;
