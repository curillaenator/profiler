import React from "react";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import styles from "./noteForm.module.scss";

function NoteForm(props) {
  let title = React.createRef();
  let text = React.createRef();

  const titleHandler = () => {
    let noteTitle = title.current.value;
    props.handleTitle(noteTitle);
  };
  const textHandler = () => {
    let noteText = text.current.value;
    props.handleText(noteText);
  };
  const buttonHandler = () => props.createNote();

  return (
    <form className={styles.form}>
      <textarea
        className={styles.title}
        onInput={titleHandler}
        ref={title}
        value={props.valueTitle}
      ></textarea>
      <textarea
        className={styles.text}
        onInput={textHandler}
        ref={text}
        value={props.valueText}
      ></textarea>
      <div className={styles.buttons}>
        <div className={styles.add}>
          <ButtonUI title="Добавить" handler={buttonHandler} />
        </div>
      </div>
    </form>
  );
}
export default NoteForm;
