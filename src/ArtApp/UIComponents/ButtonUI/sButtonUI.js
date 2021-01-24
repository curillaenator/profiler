import styles from "./buttonUI.module.scss";

function SButtonUI(props) {
  // console.log(props);

  const disabled = () =>
    props.disabled === undefined ? false : props.disabled;

  let btnStyle = () => {
    if (disabled()) {
      return styles.s_envelope_dis;
    }
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
    <button className={btnStyle()} onClick={run} disabled={disabled()}>
      {props.title}
    </button>
  );
}
export default SButtonUI;
