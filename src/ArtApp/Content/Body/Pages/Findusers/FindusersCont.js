import { connect } from "react-redux";
import Findusers from "./Findusers";

import {
  follow,
  unfollow,
  setUsers,
} from "../../../../../Redux/Reducers/findusersReducer";

const mapStateToProps = (state) => ({
  users: state.findusers.users,
  icons: state.ui.icons,
});
const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(follow(id)),
  unfollow: (id) => dispatch(unfollow(id)),
  setUsers: (users) => dispatch(setUsers(users)),
});

export const FindusersCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Findusers);
