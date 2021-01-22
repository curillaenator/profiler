import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import Profile from "./Profile";

import { setUser } from "../../../../../Redux/Reducers/profileReducer";

class ProfileAJAX extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${14217}`)
      .then((response) => this.props.setUser(response.data));
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  pictureHeight: state.ui.menuParams.height,
});

export const ProfileCont = connect(mapStateToProps, { setUser })(ProfileAJAX);
