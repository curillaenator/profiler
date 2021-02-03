import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Reducers/authReducer";
import { initializeApp } from "./../Redux/Reducers/appReducer";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Loader from "./UIComponents/Loader/Loader";

class ArtApp extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) return <Loader />;

    return (
      <BrowserRouter>
        <div className="artapp">
          <Header
            search={this.props.search}
            login={this.props.login}
            isAuth={this.props.isAuth}
            ava={this.props.ava}
            logout={this.props.logout}
          />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

const mstp = (state) => ({
  // APP INIT
  isInitialized: state.app.isInitialized,
  // FOR HEADER
  search: state.ui.icons.search,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  ava: state.auth.ava,
  // FOR CONTENT
  // ...
});

export default connect(mstp, { initializeApp, logout })(ArtApp);
