import { NavLink } from "react-router-dom";
import ButtonUI from "../../UIComponents/ButtonUI/ButtonUI";

import styles from "./menu.module.scss";

function Menu(props) {
  const navButtons = Object.keys(props.buttons);
  const menuHeight = navButtons.length * 40 + 16 * (navButtons.length - 1);
  console.log(menuHeight);
  return (
    <div className={styles.menu} style={{ height: menuHeight }}>
      {navButtons.map((navBtn) => (
        <NavLink to={navBtn} key={navBtn}>
          <ButtonUI title={props.buttons[navBtn]} />
        </NavLink>
      ))}
    </div>
  );
}
export default Menu;
