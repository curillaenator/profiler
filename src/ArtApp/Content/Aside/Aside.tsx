import { MenuCont } from "./Menu/MenuCont";

import styles from "./aside.module.scss";

function Aside() {
  return (
    <div className={styles.aside}>
      <MenuCont />
    </div>
  );
}
export default Aside;
