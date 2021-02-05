import { connect } from "react-redux";
import Notes from "./Notes";

import { createNote } from "../../../../../../Redux/Reducers/notesReducer";

const mstp = (state) => ({
  notes: state.notes,
});

export const NotesCont = connect(mstp, { createNote })(Notes);
