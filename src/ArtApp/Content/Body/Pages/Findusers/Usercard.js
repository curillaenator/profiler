import SButtonUI from "../../../../UIComponents/ButtonUI/sButtonUI";
import styles from "./findusers.module.scss";

const Usercard = (props) => {
  // console.log(props);
  const handler = () => {
    props.user.follow
      ? props.unfollow(props.user.id)
      : props.follow(props.user.id);
  };
  return (
    <div className={styles.usercard}>
      <div className={styles.ava}>
        <img src={props.user.ava} alt="" />
        <div className={styles.sbutton}>
          {props.user.follow ? (
            <SButtonUI title="отписка" type={"secondary"} handler={handler} />
          ) : (
            <SButtonUI title="в друзья" type={"primary"} handler={handler} />
          )}
        </div>
      </div>
      <div className={styles.data}>
        <h3>
          {props.user.name} {props.user.lastname}
        </h3>
        <p>{props.user.job}</p>
        <div className={styles.tabs}>
          {props.icons.country}
          <p>{props.user.location.country}</p>
        </div>
        <div className={styles.tabs}>
          {props.icons.city}
          <p>{props.user.location.city}</p>
        </div>
      </div>
    </div>
  );
};
export default Usercard;
