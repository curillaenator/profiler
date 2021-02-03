import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Findusers from "./Findusers";
import * as findUsersSel from "../../../../../Redux/Selectors/findusersSelectors";
import * as uiSel from "../../../../../Redux/Selectors/uiSelector";

import {
  requestUsers,
  follower,
  unfollower,
} from "../../../../../Redux/Reducers/findusersReducer";

class FindusersAJAX extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  pageHandler = (pageNum) =>
    this.props.requestUsers(pageNum, this.props.pageSize);

  render() {
    return (
      <Findusers
        {...this.props}
        pageHandler={this.pageHandler}
      />
    );
  }
}

const mstp = (state) => ({
  users: findUsersSel.getUsers(state),
  icons: uiSel.getIcons(state),
  totalUsers: findUsersSel.getTotalUsers(state),
  pageSize: findUsersSel.getPageSize(state),
  currentPage: findUsersSel.getCurrentPage(state),
  isFetching: findUsersSel.getIsFetching(state),
  whileFollow: findUsersSel.getWhileFollow(state),
});

export const FindusersCont = compose(
  WithAuthRedirect,
  connect(mstp, { requestUsers, follower, unfollower })
)(FindusersAJAX);
