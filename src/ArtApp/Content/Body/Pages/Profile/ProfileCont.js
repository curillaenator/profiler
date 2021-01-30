import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Profile from "./Profile";

import { setProfile } from "../../../../../Redux/Reducers/profileReducer";

class ProfileAJAX extends React.Component {
  componentDidMount() {
    console.log(this.props);
    let userId = !this.props.match.params.userId
      ? "14217"
      : this.props.match.params.userId;

    this.props.setProfile(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  // isAuth: state.auth.isAuth,
  user: state.profile.user,
  socials: state.profile.socials,
  pictureHeight: state.ui.menuParams.height,
  icons: state.ui.icons,
});

export const ProfileCont = WithAuthRedirect(
  connect(mapStateToProps, { setProfile })(withRouter(ProfileAJAX))
);
