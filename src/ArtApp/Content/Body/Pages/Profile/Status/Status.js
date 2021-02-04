import React, { useState, useEffect } from "react";
import styles from "./status.module.scss";

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const editModeON = () => setEditMode(true);
  const editModeOFF = () => {
    setEditMode(false);
    props.updateMyStatus(status); //Обновление статуса через PUT
  };
  const onStatusChange = (e) => setStatus(e.target.value);

  useEffect(() => setStatus(props.status), [props.status]);

  return (
    <div className={styles.status}>
      {editMode ? (
        <input
          className={styles.input}
          value={status}
          autoFocus={true}
          onInput={onStatusChange}
          onBlur={editModeOFF}
        />
      ) : (
        <div className={styles.string} onDoubleClick={editModeON}>
          {props.status || "напиши что нибудь"}
        </div>
      )}
    </div>
  );
};
export default Status;
