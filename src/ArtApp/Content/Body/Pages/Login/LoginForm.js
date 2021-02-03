import { Field } from "react-final-form";
import { Input } from "../../../../UIComponents/Inputs/Inputs";
import ButtonUi from "../../../../UIComponents/ButtonUI/ButtonUI";
// import { FORM_ERROR } from "final-form";

import {
  required,
  minLength,
  combinedValidators,
} from "../../../../../Validate/validators";

import styles from "./login.module.scss";

const LoginForm = (props) => {
  console.log(props);
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.input}>
        <Field
          name="email"
          placeholder="Login"
          component={Input}
          validate={combinedValidators(required, minLength(3))}
        />
      </div>

      <div className={styles.input}>
        <Field
          name="password"
          placeholder="Password"
          type="password"
          component={Input}
          validate={combinedValidators(required, minLength(5))}
        />
      </div>

      <div className={styles.checkbox}>
        <Field name="rememberMe" type="checkbox" component="input" />
        Запомнить меня
      </div>

      <div className={styles.submit}>
        <ButtonUi
          title="Войти"
          disabled={!props.values.email || !props.values.password}
        />
      </div>

      {props.submitError && (
        <div className={styles.formError}>{props.submitError}</div>
      )}
    </form>
  );
};
export default LoginForm;
