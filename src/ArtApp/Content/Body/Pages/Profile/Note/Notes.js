import { useState } from "react";
import { Form } from "react-final-form";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import Note from "./Note";
import NoteForm from "./NoteForm";

import styles from "./notes.module.scss";

function Posts(props) {
  const [add, setAdd] = useState(false);
  const addMode = () => setAdd(!add);

  const onSubmit = (formData) => {
    props.createNote(formData);
    addMode();
  };
  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <div className={styles.title}>Мои заметки</div>

        <div className={styles.addNote}>
          {add ? (
            <ButtonUI
              title="отмена"
              handler={addMode}
              fontsize="10px"
              type="secondary"
            />
          ) : (
            <ButtonUI title="добавить" handler={addMode} fontsize="10px" />
          )}
        </div>
      </div>

      {add && (
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
      )}

      <div className={styles.track}>
        {props.notes.notes.map((note) => (
          <Note post={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
