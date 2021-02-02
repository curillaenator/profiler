import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import { getUserInfo, logout } from "../../Redux/Reducers/authReducer";

class HeaderAJAX extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <Header
        search={this.props.search}
        login={this.props.login}
        isAuth={this.props.isAuth}
        ava={this.props.ava}
        logout={this.props.logout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.ui.icons.search,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  ava: state.auth.ava,
});

export const HeaderCont = connect(mapStateToProps, {
  getUserInfo,
  logout,
})(HeaderAJAX);
