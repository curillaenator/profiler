import { FC, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../../../../HOC/withAuthRedirect";
import Findusers from "./Findusers";
import * as findUsersSel from "../../../../../Redux/Selectors/findusersSelectors";
import * as uiSel from "../../../../../Redux/Selectors/uiSelector";

import { SingleUser } from "../../../../../Types/Types";
import { AppStateType } from "../../../../../Redux/store";

import {
  requestUsers,
  setCurrentPage,
  follower,
  unfollower,
} from "../../../../../Redux/Reducers/findusersReducer";

type MsProps = {
  pageQuant: number; //qty of shown pages' buttons
  currentQuant: number; //qty of pages skiped
  totalUsers: number;
  pageSize: number; // qty of users per page
  isFetching: boolean; // is now waiting for responce from server
  currentPage: number; // selected page to show
  whileFollow: Array<number>; // array of ids fetching for server response on follow/unfollow
  icons: any; // object of svg icons
  users: Array<SingleUser>;
};
type MdProps = {
  follower: (id: number) => void; // follow selected user
  unfollower: (id: number) => void; // unfollow selected user
  setCurrentPage: (pageNum: number, quant: number) => void;
  requestUsers: (page: number, pageSize: number) => void; //request users for selected page
};

type Props = MsProps & MdProps;

const FindusersAJAX: FC<Props> = (props) => {
  const { requestUsers, currentPage, pageSize } = props;
  useEffect(() => requestUsers(currentPage, pageSize), [
    requestUsers,
    currentPage,
    pageSize,
  ]);

  const pageHandler = (pageNum: number, q: number) =>
    props.setCurrentPage(pageNum, q);

  return <Findusers {...props} pageHandler={pageHandler} />;
};

const mstp = (state: AppStateType): MsProps => ({
  users: findUsersSel.getUsers(state),
  icons: uiSel.getIcons(state),
  totalUsers: findUsersSel.getTotalUsers(state),
  pageSize: findUsersSel.getPageSize(state),
  pageQuant: findUsersSel.getPageQuant(state),
  currentQuant: findUsersSel.getCurrentQuant(state),
  currentPage: findUsersSel.getCurrentPage(state),
  isFetching: findUsersSel.getIsFetching(state),
  whileFollow: findUsersSel.getWhileFollow(state),
});

const FindusersCont = compose(
  WithAuthRedirect,
  connect<MsProps, MdProps, {}, AppStateType>(mstp, {
    requestUsers,
    setCurrentPage,
    follower,
    unfollower,
  })
)(FindusersAJAX);

export default FindusersCont;
