import { connect } from "react-redux";
import Notes from "./Notes";

import { createNote } from "../../../../../../Redux/Reducers/notesReducer";

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export const NotesCont = connect(mapStateToProps, { createNote })(Notes);
