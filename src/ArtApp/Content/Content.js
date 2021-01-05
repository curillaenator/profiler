import MenuCont from "./Menu/MenuCont";
import Body from "./Body/Body";

import styles from "./content.module.scss";

function Content() {
  return (
    <div className={styles.content}>
      <MenuCont />
      <Body />
    </div>
  );
}
export default Content;
