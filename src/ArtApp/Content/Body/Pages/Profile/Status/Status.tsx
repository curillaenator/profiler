import { FC, useState, useEffect, ChangeEvent } from "react";
import styles from "./status.module.scss";

type Props = {
  status: string;
  updateMyStatus: (status: string) => void;
  isOwner: boolean;
};

const Status: FC<Props> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const editModeON = () => props.isOwner && setEditMode(true);
  const editModeOFF = () => {
    setEditMode(false);
    props.updateMyStatus(status); //Обновление статуса через PUT
  };
  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(event.target.value);

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
          {props.status || (props.isOwner && "напиши что нибудь")}
        </div>
      )}
    </div>
  );
};
export default Status;
