import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Profile from "./Profile";

import {
  getProfile,
  getStatus,
  updateMyStatus,
} from "../../../../../Redux/Reducers/profileReducer";

class ProfileAJAX extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    let userId = !this.props.match.params.userId
      ? "14217"
      : // "2"
        this.props.match.params.userId;

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  myId: state.auth.id,
  user: state.profile.user,
  socials: state.profile.socials,
  status: state.profile.status,
  pictureHeight: state.ui.menuParams.height,
  icons: state.ui.icons,
});

export const ProfileCont = compose(
  // WithAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateMyStatus }),
  withRouter
)(ProfileAJAX);
