import ButtonLink from "../../../UIComponents/ButtonUI/ButtonLink";

import styles from "./menu.module.scss";

function Menu(props) {
  return (
    <div className={styles.menu} style={{ height: props.heigth }}>
      {Object.keys(props.buttons).map((btn) => (
        <div className={styles.menuBtn} key={btn}>
          <ButtonLink title={props.buttons[btn]} link={btn} />
        </div>
      ))}
    </div>
  );
}
export default Menu;
