import { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Profile from "./Profile";
import * as profileSel from "../../../../../Redux/Selectors/profileSelector";
import * as uiSel from "../../../../../Redux/Selectors/uiSelector";
import * as authSel from "../../../../../Redux/Selectors/authSelector";

import {
  requestProfile,
  requestStatus,
  updateMyStatus,
  updatePhoto,
} from "../../../../../Redux/Reducers/profileReducer";

const ProfileAJAX = (props) => {
  const { requestProfile, requestStatus, ...dimedProps } = props;
  const userId = !props.match.params.userId
    ? props.ownerId
    : props.match.params.userId;

  useEffect(() => {
    requestProfile(userId);
    requestStatus(userId);
  }, [userId, requestProfile, requestStatus]);

  return <Profile {...dimedProps} />;
};

const mapStateToProps = (state) => ({
  ownerId: authSel.getAuthId(state),
  user: profileSel.getUser(state),
  socials: profileSel.getSocials(state),
  status: profileSel.getStatus(state),
  pictureHeight: state.ui.menuParams.height,
  icons: uiSel.getIcons(state),
});

export const ProfileCont = compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
    requestProfile,
    requestStatus,
    updateMyStatus,
    updatePhoto,
  }),
  withRouter
)(ProfileAJAX);
