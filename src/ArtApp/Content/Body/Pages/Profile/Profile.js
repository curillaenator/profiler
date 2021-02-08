import { useState } from "react";
import ProfileData from "./ProfileData";
import { PrimaryDivider } from "../../../../UIComponents/Dividers/Dividers";
import Update from "./Update/Update";
import Loader from "../../../../UIComponents/Loader/Loader";

import styles from "./profile.module.scss";

function Profile(props) {
  const [edit, setEdit] = useState(false);
  const editMode = () => setEdit(!edit);

  if (!props.user) {
    return <Loader />;
  }
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
      <PrimaryDivider height="20px" />

      {edit ? (
        <Update
          ownerId={props.ownerId}
          contacts={props.user.contacts}
          user={props.user}
          updateProfile={props.updateProfile}
          editMode={editMode}
          icons={props.icons}
        />
      ) : (
        <ProfileData
          user={props.user}
          isOwner={!props.match.params.userId}
          updatePhoto={props.updatePhoto}
          status={props.status}
          updateMyStatus={props.updateMyStatus}
          editMode={editMode}
          icons={props.icons}
        />
      )}
    </div>
  );
}

export default Profile;
