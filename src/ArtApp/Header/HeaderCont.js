import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Header from "./Header";

import { userData } from "../../Redux/Reducers/authReducer";

class HeaderAJAX extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0)
          this.props.userData(response.data.data);
      });
  }
  render() {
    return (
      <Header
        search={this.props.search}
        login={this.props.login}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.ui.icons.search,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export const HeaderCont = connect(mapStateToProps, { userData })(HeaderAJAX);
