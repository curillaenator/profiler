// import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import nullava from "../../../../../../assets/images/nullAva.jpg";
import styles from "./avatar.module.scss";

const NewPhoto = (props) => {
  const handlePhoto = (e) => {
    e.target.files.length && props.updatePhoto(e.target.files);
  };
  console.log(props);
  return (
    <div className={styles.newPhoto}>
      <input type="file" onChange={handlePhoto} />
      {/* <label htmlFor="updatePhoto">
      <ButtonUI title="обновить" fontsize="10px" />
    </label> */}
    </div>
  );
};

const Avatar = (props) => {
  const { photo, fullname, isOwner } = props;
  return (
    <div className={styles.avatar}>
      <div className={styles.image}>
        <img src={photo === null ? nullava : photo} alt={fullname} />
      </div>
      {isOwner && <NewPhoto updatePhoto={props.updatePhoto} />}
    </div>
  );
};
export default Avatar;
