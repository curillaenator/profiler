import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";

import Findusers from "./Findusers";

import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  fetching,
} from "../../../../../Redux/Reducers/findusersReducer";

class FindusersAJAX extends React.Component {
  componentDidMount() {
    this.props.fetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentpage}&count=${this.props.pagesize}`
      )
      .then((response) => {
        this.props.setTotalUsers(response.data.totalCount);
        this.props.setUsers(response.data.items);
        this.props.fetching(false);
      });
  }
  pageHandler = (pageNum) => {
    this.props.fetching(true);
    this.props.setCurrentPage(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pagesize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.fetching(false);
      });
  };
  render() {
    // console.log(this.props);
    return (
      <>
        <Findusers
          isFetching={this.props.isFetching}
          currentpage={this.props.currentpage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          icons={this.props.icons}
          pagesize={this.props.pagesize}
          totalusers={this.props.totalusers}
          users={this.props.users}
          pageHandler={this.pageHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.findusers.users,
  icons: state.ui.icons,
  totalusers: state.findusers.totalusers,
  pagesize: state.findusers.pagesize,
  currentpage: state.findusers.currentpage,
  isFetching: state.findusers.isFetching,
});

export const FindusersCont = connect(mapStateToProps, {
  follow,
  unfollow,
  setTotalUsers,
  setUsers,
  setCurrentPage,
  fetching,
})(FindusersAJAX);
