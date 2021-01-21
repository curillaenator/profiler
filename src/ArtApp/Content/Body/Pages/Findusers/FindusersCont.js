import React from  'react';
import * as axios from 'axios';
import { connect } from "react-redux";

import Findusers from "./Findusers";

import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
} from "../../../../../Redux/Reducers/findusersReducer";

class FindusersAJAX extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentpage}&count=${this.props.pagesize}`
      )
      .then((response) => {
        this.props.setTotalUsers(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }
  pageHandler = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pagesize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Findusers
        currentpage={this.props.currentpage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        icons={this.props.icons}
        pagesize={this.props.pagesize}
        totalusers={this.props.totalusers}
        users={this.props.users}
        pageHandler={this.pageHandler}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.findusers.users,
  icons: state.ui.icons,
  totalusers: state.findusers.totalusers,
  pagesize: state.findusers.pagesize,
  currentpage: state.findusers.currentpage,
});
const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(follow(id)),
  unfollow: (id) => dispatch(unfollow(id)),
  setTotalUsers: (total) => dispatch(setTotalUsers(total)),
  setUsers: (users) => dispatch(setUsers(users)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export const FindusersCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindusersAJAX);
