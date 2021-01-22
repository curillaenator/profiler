import loader from "../../../assets/images/loader.gif";
import styles from "./loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader_env}>
      <img className={styles.loader} src={loader} alt="Loader" />
    </div>
  );
}
export default Loader;
