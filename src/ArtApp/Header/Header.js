import { NavLink } from "react-router-dom";

import styles from "./header.module.scss";

function Header(props) {
  // console.log(props);
  return (
    <div className={styles.header}>
      <div className={styles.pad}>ArtApp</div>
      <div className={styles.pad}>
        <NavLink to="findusers" className={styles.find}>
          {props.search}
          <p>Найти людей</p>
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
