import styles from "./dividers.module.scss";

export const PrimaryDivider = (props) => (
  <div className={styles.blueFat} style={{ height: props.height }}></div>
);
