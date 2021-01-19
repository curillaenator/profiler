import React from "react";
import Note from "./Note/Note";
import NoteForm from "./Note/NoteForm";
import styles from "./posts.module.scss";

function Posts(props) {
  //   console.log(props);
  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <div className={styles.title}>Заметки</div>
        <NoteForm
          handleTitle={props.handleTitle}
          handleText={props.handleText}
          createNote={props.createNote}
          valueText={props.postsdata.text}
          valueTitle={props.postsdata.title}
        />
      </div>
      <div className={styles.track}>
        {props.postsdata.posts.map((post) => (
          <Note post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
