import Loader from "../../../../UIComponents/Loader/Loader";
import nullava from "../../../../../assets/images/nullAva.jpg";

import styles from "./profile.module.scss";

function Profile(props) {
  // console.log(!props.user);
  if (!props.user) {
    return <Loader />;
  }
  const mainpic =
    "https://d16yj43vx3i1f6.cloudfront.net/uploads/2019/12/main_0000_Vietnam_1200-1088x529.jpg";
  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <img
          src={props.user.image === undefined ? mainpic : props.user.image}
          style={{ height: props.pictureHeight }}
          alt={props.user.fullName}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img
            src={
              props.user.photos.small === null
                ? nullava
                : props.user.photos.small
            }
            alt={props.user.fullName}
          />
        </div>
        <div className={styles.metrics}>
          <div className={styles.name}>{props.user.fullName}</div>
          <div className={styles.job}>
            {props.user.lookingForAJobDescription}
          </div>
        </div>
        <div className={styles.buttons}></div>
      </div>
    </div>
  );
}

export default Profile;
