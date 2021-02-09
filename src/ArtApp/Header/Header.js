import { NavLink } from "react-router-dom";
import ButtonUI from "../UIComponents/ButtonUI/ButtonUI";
import nullAva from "../../assets/images/nullAva.jpg";

import styles from "./header.module.scss";

function Header(props) {
  const { avatarInit, logout, search } = props;
  return (
    <div className={styles.header}>
      <div className={styles.pad}>
        <h1>PROФайлер</h1>
      </div>
      <div className={styles.pad}>
        <NavLink to="/findusers" className={styles.find}>
          {search}
          <p>Найти людей</p>
        </NavLink>

        {props.isAuth ? (
          <div className={styles.ava}>
            <img src={avatarInit || nullAva} alt={props.login} />
            <div className={styles.logout}>
              <ButtonUI title="выйти" type="secondary" handler={logout} />
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
