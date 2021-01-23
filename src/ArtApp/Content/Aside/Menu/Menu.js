import ButtonLink from "../../../UIComponents/ButtonUI/ButtonLink";

import styles from "./menu.module.scss";

function Menu(props) {
  return (
    <div className={styles.menu} style={{ height: props.heigth }}>
      {Object.keys(props.buttons).map((btn) => (
        <ButtonLink title={props.buttons[btn]} link={btn} key={btn} />
      ))}
    </div>
  );
}
export default Menu;
