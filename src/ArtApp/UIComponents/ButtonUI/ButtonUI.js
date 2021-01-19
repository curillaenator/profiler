import styles from "./buttonUI.module.scss";

function ButtonUI(props) {
  const exec = () => props.handler();
  return (
    <div className={styles.envelope} onClick={exec}>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}
export default ButtonUI;
