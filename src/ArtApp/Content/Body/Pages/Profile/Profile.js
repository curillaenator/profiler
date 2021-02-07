import Avatar from "./Avatar/Avatar";
import Loader from "../../../../UIComponents/Loader/Loader";
// import nullava from "../../../../../assets/images/nullAva.jpg";
import Status from "./Status/Status";

import styles from "./profile.module.scss";

function Profile(props) {
  // console.log(props);
  if (!props.user) {
    return <Loader />;
  }
  const socials = props.socials.map((el) => ({
    name: el,
    link: props.user.contacts[el],
    ico: props.icons[el],
  }));

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
        <Avatar
          photo={props.user.photos.large}
          fullname={props.user.fullName}
          isOwner={!props.match.params.userId}
          updatePhoto={props.updatePhoto}
        />
        <div className={styles.metrics}>
          <div className={styles.name}>{props.user.fullName}</div>

          <div className={styles.job}>
            {props.user.lookingForAJobDescription === null
              ? "Фронтэнд разработчик"
              : props.user.lookingForAJobDescription}
          </div>

          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                href={s.link}
                key={s.name}
                className={s.link === null ? styles.disabled : styles.uploaded}
              >
                {s.ico}
              </a>
            ))}
          </div>
          <Status status={props.status} updateMyStatus={props.updateMyStatus} />
        </div>
        <div className={styles.buttons}></div>
      </div>
    </div>
  );
}

export default Profile;
