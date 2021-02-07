import { useState } from "react";
import Avatar from "./Avatar/Avatar";
import Update from "./Update/Update";
import Loader from "../../../../UIComponents/Loader/Loader";
import Status from "./Status/Status";
import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";

import styles from "./profile.module.scss";

function Profile(props) {
  const [edit, setEdit] = useState(false);
  const editMode = () => setEdit(!edit);

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
          src={props.user.image || mainpic}
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
            {props.user.lookingForAJobDescription || "Фронтэнд разработчик"}
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
        <div className={styles.update}>
          <ButtonUI title="редактировать" fontsize="10px" handler={editMode} />
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h3>Обо мне:</h3>
        {props.user.aboutMe}
      </div>

      {edit && (
        <Update
          ownerId={props.ownerId}
          contacts={props.user.contacts}
          user={props.user}
          updateProfile={props.updateProfile}
          editMode={editMode}
        />
      )}
    </div>
  );
}

export default Profile;
