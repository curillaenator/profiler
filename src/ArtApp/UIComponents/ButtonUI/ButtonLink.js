import { NavLink } from "react-router-dom";

import styles from "./buttonUI.module.scss";

function ButtonUI(props) {
  return (
    <NavLink
      to={props.link}
      className={styles.envelope}
      activeClassName={styles.active}
    >
      <div className={styles.title}>{props.title}</div>
    </NavLink>
  );
}
export default ButtonUI;
