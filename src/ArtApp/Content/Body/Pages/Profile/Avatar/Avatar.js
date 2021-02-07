// import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import nullava from "../../../../../../assets/images/nullAva.jpg";
import styles from "./avatar.module.scss";

const NewPhoto = (props) => {
  const handlePhoto = (e) => {
    e.target.files.length && props.updatePhoto(e.target.files);
  };
  return (
    <div className={styles.newPhoto}>
      <input type="file" onChange={handlePhoto} id="updatePhoto" />
      <label htmlFor="updatePhoto">обновить</label>
    </div>
  );
};

const Avatar = (props) => {
  const { photo, fullname, isOwner } = props;
  return (
    <div className={styles.avatar}>
      <img src={photo === null ? nullava : photo} alt={fullname} />
      {isOwner && <NewPhoto updatePhoto={props.updatePhoto} />}
    </div>
  );
};
export default Avatar;
