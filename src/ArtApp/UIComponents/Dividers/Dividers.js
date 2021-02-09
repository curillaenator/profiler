import styles from "./dividers.module.scss";

export const PrimaryDivider = (props) => (
  <div className={styles.primary} style={{ height: props.height }}></div>
);
export const SecondaryDivider = (props) => (
  <div className={styles.secondary} style={{ height: props.height }}></div>
)
