import { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Findusers from "./Findusers";
import * as findUsersSel from "../../../../../Redux/Selectors/findusersSelectors";
import * as uiSel from "../../../../../Redux/Selectors/uiSelector";

import {
  requestUsers,
  setCurrentPage,
  follower,
  unfollower,
} from "../../../../../Redux/Reducers/findusersReducer";

const FindusersAJAX = (props) => {
  const { requestUsers, currentPage, pageSize } = props;

  useEffect(() => requestUsers(currentPage, pageSize), [
    requestUsers,
    currentPage,
    pageSize,
  ]);

  const pageHandler = (pageNum) => props.setCurrentPage(pageNum);

  return <Findusers {...props} pageHandler={pageHandler} />;
};

const mstp = (state) => ({
  users: findUsersSel.getUsers(state),
  icons: uiSel.getIcons(state),
  totalUsers: findUsersSel.getTotalUsers(state),
  pageSize: findUsersSel.getPageSize(state),
  pageQuantize: findUsersSel.getPageQuatize(state),
  currentPage: findUsersSel.getCurrentPage(state),
  isFetching: findUsersSel.getIsFetching(state),
  whileFollow: findUsersSel.getWhileFollow(state),
});

export const FindusersCont = compose(
  WithAuthRedirect,
  connect(mstp, { requestUsers, setCurrentPage, follower, unfollower })
)(FindusersAJAX);
