import React from "react";
import { connect } from "react-redux";

import Findusers from "./Findusers";

import {
  getUsers,
  follower,
  unfollower,
} from "../../../../../Redux/Reducers/findusersReducer";

class FindusersAJAX extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentpage, this.props.pagesize);
  }
  pageHandler = (pageNum) => this.props.getUsers(pageNum, this.props.pagesize);

  render() {
    // console.log(this.props);
    return (
      <Findusers
        isFetching={this.props.isFetching}
        currentpage={this.props.currentpage}
        follower={this.props.follower}
        unfollower={this.props.unfollower}
        whileFollow={this.props.whileFollow}
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
  isFetching: state.findusers.isFetching,
  whileFollow: state.findusers.whileFollow,
});

export const FindusersCont = connect(mapStateToProps, {
  getUsers,
  follower,
  unfollower
})(FindusersAJAX);
