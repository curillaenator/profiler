import ButtonLink from "../../../UIComponents/ButtonUI/ButtonLink";

import styles from "./menu.module.scss";

function Menu(props) {
  // console.log(props);
  const navButtons = Object.keys(props.buttons);
  const menuHeight = navButtons.length * 40 + 16 * (navButtons.length - 1);
  props.menuHeight(menuHeight);
  return (
    <div className={styles.menu} style={{ height: menuHeight }}>
      {navButtons.map((navBtn) => (
        <ButtonLink title={props.buttons[navBtn]} link={navBtn} key={navBtn} />
      ))}
    </div>
  );
}
export default Menu;
