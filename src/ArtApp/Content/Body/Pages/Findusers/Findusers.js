import Usercard from "./Usercard";
import styles from "./findusers.module.scss";

function Findusers(props) {
  // console.log(props);
  return (
    <div className={styles.findusers}>
      <div className={styles.searchbox}></div>
      <div className={styles.users}>
        {props.users.map((u) => (
          <Usercard
            user={u}
            key={u.id}
            icons={props.icons}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
}
export default Findusers;
