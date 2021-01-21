import SButtonUI from "../../../../UIComponents/ButtonUI/sButtonUI";
import styles from "./findusers.module.scss";
import nullava from "../../../../../assets/images/nullAva.jpg";

const Usercard = (props) => {
  // console.log(props);
  const handler = () => {
    props.user.followed
      ? props.unfollow(props.user.id)
      : props.follow(props.user.id);
  };
  return (
    <div className={styles.usercard}>
      <div className={styles.ava}>
        <img
          src={
            props.user.photos.small === null ? nullava : props.user.photos.small
          }
          alt=""
        />
        <div className={styles.sbutton}>
          {props.user.followed ? (
            <SButtonUI title="отписка" type={"secondary"} handler={handler} />
          ) : (
            <SButtonUI title="в друзья" type={"primary"} handler={handler} />
          )}
        </div>
      </div>
      <div className={styles.data}>
        <h3>{props.user.name}</h3>
        <p>
          {props.user.status === null ? "неопытный гений" : props.user.status}
        </p>
        <div className={styles.tabs}>
          {props.icons.country}
          <p>{"Россия"}</p>
        </div>
        <div className={styles.tabs}>
          {props.icons.city}
          <p>{"Москва"}</p>
        </div>
      </div>
    </div>
  );
};
export default Usercard;
