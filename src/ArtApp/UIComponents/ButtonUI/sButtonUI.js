import styles from "./buttonUI.module.scss";

function SButtonUI(props) {
  // console.log(props);
  let btnStyle = () => {
    switch (props.type) {
      case "secondary":
        return styles.s_envelope_sec;
      default:
        return styles.s_envelope;
    }
  };

  const run = () => props.handler();
  return (
    <div className={btnStyle()} onClick={run}>
      <div className={styles.s_title}>{props.title}</div>
    </div>
  );
}
export default SButtonUI;
