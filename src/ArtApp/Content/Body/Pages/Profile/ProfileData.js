import Status from "./Status/Status";
import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";
import Avatar from "./Avatar/Avatar";

import styles from "./profile.module.scss";

const ProfileData = (props) => {
//   console.log(props);
  const socials = props.socials.map((el) => ({
    name: el,
    link: props.contacts[el],
    ico: props.icons[el],
  }));
  return (
    <div className={styles.profileData}>
      <div className={styles.info}>
        <Avatar
          photo={props.photo}
          fullname={props.fullname}
          isOwner={props.isOwner}
          updatePhoto={props.updatePhoto}
        />
        <div className={styles.metrics}>
          <div className={styles.name}>{props.fullname}</div>

          <div className={styles.job}>
            {props.lookingForAJobDescription || "Фронтэнд разработчик"}
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
          <Status
            status={props.status}
            updateMyStatus={props.updateMyStatus}
            isOwner={props.isOwner}
          />
        </div>
        <div className={styles.update}>
          {props.isOwner && (
            <ButtonUI
              title="редактировать"
              fontsize="10px"
              handler={props.editMode}
            />
          )}
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h3>Обо мне:</h3>
        {props.aboutMe}
      </div>
    </div>
  );
};
export default ProfileData;
