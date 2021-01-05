import styles from "./buttonUI.module.scss";

function ButtonUI(props) {
  return (
    <div className={styles.envelope}>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}
export default ButtonUI;
