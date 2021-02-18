import { FC, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Profile from "./Profile";
import * as profileSel from "../../../../../Redux/Selectors/profileSelector";
import * as uiSel from "../../../../../Redux/Selectors/uiSelector";
import * as authSel from "../../../../../Redux/Selectors/authSelector";
import { AppStateType } from "../../../../../Redux/store";
import { UserData } from "../../../../../Types/Types";
import {
  requestProfile,
  requestStatus,
  updateMyStatus,
  updatePhoto,
  updateProfile,
} from "../../../../../Redux/Reducers/profileReducer";

type MsProps = {
  ownerId: number;
  user: any;
  status: string;
  pictureHeight: number;
  icons: any;
};
type MdProps = {
  match:any,
  requestProfile: (userId:number) => void;
  requestStatus: (userId:number) => void;
  updateMyStatus: (status: string) => void;
  updatePhoto: (photoFiles: any) => void;
  updateProfile: (newUserData: UserData) => void;
};

type Props = MsProps & MdProps;

const ProfileAJAX: FC<Props> = (props) => {
  const { requestProfile, requestStatus, ...dimedProps } = props;
  const userId: number = !props.match.params.userId
    ? props.ownerId
    : props.match.params.userId;

  useEffect(() => {
    requestProfile(userId);
    requestStatus(userId);
  }, [userId, requestProfile, requestStatus]);

  return <Profile {...dimedProps} />;
};

const mapStateToProps = (state: AppStateType) => ({
  ownerId: authSel.getAuthId(state),
  user: profileSel.getUser(state),
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
    updateProfile,
  }),
  withRouter
)(ProfileAJAX);
