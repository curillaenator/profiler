import styles from "./buttonUI.module.scss";

function SButtonUI(props) {
  // console.log(props.handlerArgs === undefined);
  let btnStyle = () => {
    switch (props.type) {
      case "secondary":
        return styles.s_envelope_sec;
      case "activated":
        return styles.s_envelope_act;
      default:
        return styles.s_envelope;
    }
  };
  const args = () => (props.handlerArgs === undefined ? "" : props.handlerArgs);
  const run = () => (props.handler === undefined ? "" : props.handler(args()));
  
  return (
    <div className={btnStyle()} onClick={run}>
      <div className={styles.s_title}>{props.title}</div>
    </div>
  );
}
export default SButtonUI;
