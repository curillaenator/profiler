import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as axios from "axios";

import Profile from "./Profile";

import { setUser } from "../../../../../Redux/Reducers/profileReducer";

class ProfileAJAX extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          !this.props.match.params.userId
            ? "14217"
            : this.props.match.params.userId
        }`
      )
      .then((response) => this.props.setUser(response.data));
  }
  render() {
    // console.log(this.props);
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  socials: state.profile.socials,
  pictureHeight: state.ui.menuParams.height,
  icons: state.ui.icons,
});

export const ProfileCont = connect(mapStateToProps, { setUser })(
  withRouter(ProfileAJAX)
);
