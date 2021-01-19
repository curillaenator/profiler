import styles from "./note.module.scss";

function Note(props) {
  return (
    <div className={styles.note}>
      <div className={styles.title}>
        <h3>{props.post.title}</h3>
        <p>{props.post.date}</p>
      </div>
      <p>{props.post.text}</p>
    </div>
  );
}
export default Note;
