import { connect } from "react-redux";
import Profile from "./Profile";

import { actionAgeWorder } from "../../../../../Redux/Reducers/profileReducer";

const mapStateToProps = (state) => ({
  user: state.profile.user,
  pictureHeight: state.ui.menuParams.height,
});
const mapDispatchToProps = (dispatch) => ({
  ageWorder: (age) => {
    dispatch(actionAgeWorder(age));
  },
});

export const ProfileCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
