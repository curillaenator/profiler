import { NavLink } from "react-router-dom";

import nullAva from "../../assets/images/nullAva.jpg";

import styles from "./header.module.scss";

function Header(props) {
  // console.log(props);
  return (
    <div className={styles.header}>
      <div className={styles.pad}>ArtApp</div>
      <div className={styles.pad}>
        <NavLink to="/findusers" className={styles.find}>
          {props.search}
          <p>Найти людей</p>
        </NavLink>
        <div className={props.isAuth ? styles.ava : styles.auth}>
          {props.isAuth ? (
            <img
              src={props.ava === null ? nullAva : props.ava}
              alt={props.login}
            />
          ) : (
            "войти"
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
