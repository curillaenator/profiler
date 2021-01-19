import styles from "./profile.module.scss";

function Profile(props) {
  // console.log(props);
  const fullname = `${props.user.name} ${props.user.last}`;
  // const fullage = props.user.age;
  // props.ageWorder(fullage);
  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <img
          src={props.user.image}
          style={{ height: props.pictureHeight }}
          alt={props.user.name}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={props.user.avatar} alt={fullname} />
        </div>
        <div className={styles.metrics}>
          <div className={styles.name}>{fullname}</div>
          <div className={styles.job}>{props.user.job}</div>
          <div className={styles.age}>
            Возраст: {props.user.age} {props.user.ageWord}
          </div>
        </div>
        <div className={styles.buttons}></div>
      </div>
    </div>
  );
}

export default Profile;
