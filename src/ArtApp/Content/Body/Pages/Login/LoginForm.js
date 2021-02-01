import { Field } from "react-final-form";

import ButtonUi from "../../../../UIComponents/ButtonUI/ButtonUI";

import styles from "./login.module.scss";

const LoginForm = (props) => {
  // console.log(props);
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.input}>
        <Field name="email" placeholder="Login" component="input" />
      </div>

      <div className={styles.input}>
        <Field name="password" placeholder="Password" component="input" />
      </div>

      <div className={styles.checkbox}>
        <Field name="rememberMe" type="checkbox" component="input" />
        Запомнить меня
      </div>

      <div className={styles.submit}>
        <ButtonUi title="Войти" disabled={props.pristine} />
      </div>
    </form>
  );
};
export default LoginForm;
