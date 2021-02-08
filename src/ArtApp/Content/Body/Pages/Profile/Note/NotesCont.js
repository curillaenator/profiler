import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Notes from "./Notes";

import { createNote } from "../../../../../../Redux/Reducers/notesReducer";

const NotesAPI = (props) => {
  return props.match.params.userId ? (
    <p>нет серверного API для работы с заметками, реализовано на redux</p>
  ) : (
    <Notes {...props} />
  );
};

const mstp = (state) => ({
  notes: state.notes,
});

export const NotesCont = compose(
  withRouter,
  connect(mstp, { createNote })
)(NotesAPI);
