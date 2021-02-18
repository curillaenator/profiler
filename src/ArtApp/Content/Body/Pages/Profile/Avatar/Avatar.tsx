import { FC } from "react";
import nullava from "../../../../../../assets/images/nullAva.jpg";
import styles from "./avatar.module.scss";

type NewPhotoProps = {
  updatePhoto: (photoFiles: any) => void;
};

const NewPhoto: FC<NewPhotoProps> = (props) => {
  const handlePhoto = (e: any) => {
    e.target.files.length && props.updatePhoto(e.target.files);
  };
  return (
    <div className={styles.newPhoto}>
      <input type="file" onChange={handlePhoto} id="updatePhoto" />
      <label htmlFor="updatePhoto">обновить</label>
    </div>
  );
};

type AvatarProps = {
  photo: string;
  fullname: string;
  isOwner: boolean;
  updatePhoto: (photoFiles: any) => void;
};

const Avatar: FC<AvatarProps> = ({ photo, fullname, isOwner, updatePhoto }) => {
  return (
    <div className={styles.avatar}>
      <img src={photo === null ? nullava : photo} alt={fullname} />
      {isOwner && <NewPhoto updatePhoto={updatePhoto} />}
    </div>
  );
};
export default Avatar;
