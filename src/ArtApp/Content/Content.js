// import MenuCont from "./Aside/Menu/MenuCont";
import Aside from "./Aside/Aside";
import Body from "./Body/Body";

import styles from "./content.module.scss";

function Content() {
  return (
    <div className={styles.content}>
      <Aside />
      <Body />
    </div>
  );
}
export default Content;
