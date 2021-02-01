import styles from "./buttonUI.module.scss";

function ButtonUI(props) {
  const disabled = () =>
    props.disabled === undefined ? false : props.disabled;

  let btnStyle = () => {
    if (disabled()) {
      return styles.envelope_dis;
    }
    switch (props.type) {
      case "secondary":
        return styles.envelope_sec;
      case "activated":
        return styles.senvelope_act;
      default:
        return styles.envelope;
    }
  };

  const args = () => (props.handlerArgs === undefined ? "" : props.handlerArgs);
  const run = () => (props.handler === undefined ? "" : props.handler(args()));

  return (
    <button className={btnStyle()} onClick={run} disabled={disabled()}>
      {props.title}
    </button>
  );
}
export default ButtonUI;
