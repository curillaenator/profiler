import { NavLink } from "react-router-dom";
import ButtonUI from "../UIComponents/ButtonUI/ButtonUI";
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

        {props.isAuth ? (
          <div className={styles.ava}>
            <img
              src={props.avatar === null ? nullAva : props.avatar}
              alt={props.login}
            />
            <div className={styles.logout}>
              <ButtonUI title="выйти" type="secondary" handler={props.logout} />
            </div>
          </div>
        ) : (
          <NavLink to="/login" className={styles.login}>
            <p>войти</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default Header;
