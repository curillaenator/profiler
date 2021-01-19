import { connect } from "react-redux";
import Posts from "./Posts";

import {
  handleTitle,
  handleText,
  createNote,
} from "../../../../../Redux/Reducers/postsReducer";

const mapStateToProps = (state) => ({
  postsdata: state.posts,
});
const mapDispatchToProps = (dispatch) => ({
  handleTitle: (t) => dispatch(handleTitle(t)),
  handleText: (t) => dispatch(handleText(t)),
  createNote: () => dispatch(createNote()),
});

export const PostsCont = connect(mapStateToProps, mapDispatchToProps)(Posts);
