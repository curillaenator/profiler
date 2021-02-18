import { FC } from "react";
import Status from "./Status/Status";
import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";
import Avatar from "./Avatar/Avatar";

import styles from "./profile.module.scss";
// import { UserData } from "../../../../../Types/Types";

type Props = {
  user: any;
  isOwner: boolean;
  status: string;
  icons: any;
  updatePhoto: (photoFiles: any) => void;
  updateMyStatus: (status: string) => void;
  editMode: () => void;
};

type Social = {
  name: string;
  link: string;
  ico: any;
};
type Socials = Array<Social>;

const ProfileData: FC<Props> = ({ user, ...props }) => {
  const socials: Socials = Object.keys(user.contacts).map((el) => ({
    name: el,
    link: user.contacts[el],
    ico: props.icons[el],
  }));
  return (
    <div className={styles.profileData}>
      <div className={styles.info}>
        <Avatar
          photo={user.photos.large}
          fullname={user.fullName}
          isOwner={props.isOwner}
          updatePhoto={props.updatePhoto}
        />
        <div className={styles.metrics}>
          <div className={styles.name}>
            <h3>{user.fullName}</h3>
            {user.lookingForAJob && <p>(ищу работу)</p>}
          </div>

          <div className={styles.job}>
            {user.lookingForAJobDescription || "Фронтэнд разработчик"}
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
        {user.aboutMe}
      </div>
    </div>
  );
};
export default ProfileData;
