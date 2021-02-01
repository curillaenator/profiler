import React from "react";
import { Field } from "react-final-form";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import styles from "./noteForm.module.scss";

function NoteForm(props) {
  const addDisabled =
    !props.values.title || !props.values.text || props.submitting;

  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.title}>
        <Field name="title" placeholder="Тайтл" component="textarea" />
      </div>

      <div className={styles.text}>
        <Field name="text" placeholder="Текст" component="textarea" />
      </div>

      <div className={styles.buttons}>
        <div className={styles.clear}>
          <ButtonUI
            title="Очистить"
            type="secondary"
            disabled={props.pristine || props.submitting}
            handler={props.form.reset}
          />
        </div>
        <div className={styles.add}>
          <ButtonUI title="Добавить" disabled={addDisabled} />
        </div>
      </div>
    </form>
  );
}
export default NoteForm;
