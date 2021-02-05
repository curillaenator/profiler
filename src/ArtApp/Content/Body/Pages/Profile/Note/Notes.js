import React from "react";
import { Form } from "react-final-form";
import Note from "./Note";
import NoteForm from "./NoteForm";

import styles from "./notes.module.scss";

function Posts(props) {
  const onSubmit = (formData) => props.createNote(formData);
  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <div className={styles.title}>Заметки</div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, values, pristine }) => (
            <NoteForm
              handleSubmit={handleSubmit}
              submitting={submitting}
              values={values}
              form={form}
              pristine={pristine}
            />
          )}
        />
      </div>
      <div className={styles.track}>
        {props.notes.notes.map((note) => (
          <Note post={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
