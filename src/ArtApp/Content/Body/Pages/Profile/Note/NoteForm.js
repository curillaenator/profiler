import React from "react";
import { Field } from "react-final-form";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import { Textarea } from "../../../../../UIComponents/Inputs/Inputs";
import { maxLength } from "../../../../../../Validate/validators";

import styles from "./noteForm.module.scss";

function NoteForm(props) {
  const addDisabled =
    !props.values.title || !props.values.text || props.submitting;

  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.title}>
        <Field
          name="title"
          placeholder="Тайтл"
          component={Textarea}
          resize="none"
          minheight="32px"
          maxheight="32px"
          validate={maxLength(15)}
        />
      </div>

      <div className={styles.text}>
        <Field
          name="text"
          placeholder="Текст"
          component={Textarea}
          resize="vertical"
          minheight="46px"
          maxheight="8rem"
        />
      </div>

      <div className={styles.buttons}>
        <div className={styles.button}>
          <ButtonUI
            title="Очистить"
            type="secondary"
            disabled={props.pristine || props.submitting}
            handler={props.form.reset}
          />
        </div>
        <div className={styles.button}>
          <ButtonUI title="Добавить" disabled={addDisabled} />
        </div>
      </div>
    </form>
  );
}
export default NoteForm;
