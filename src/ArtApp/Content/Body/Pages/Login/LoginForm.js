import { Field } from "react-final-form";
import { Input } from "../../../../UIComponents/Inputs/Inputs";
import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";
import {
  required,
  minLength,
  combinedValidators,
} from "../../../../../Validate/validators";

import styles from "./login.module.scss";

const LoginForm = (props) => {
  // console.log(props);
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
          validate={combinedValidators(required, minLength(4))}
        />
      </div>

      <div className={styles.checkbox}>
        <Field name="rememberMe" type="checkbox" component="input" />
        Запомнить меня
      </div>

      {props.submitError && props.captcha && (
        <div className={styles.captcha}>
          <img src={props.captcha} alt="captcha" />
          <div className={styles.input}>
            <Field
              name="captcha"
              placeholder="введите символы"
              component={Input}
              validate={required}
            />
          </div>
        </div>
      )}

      <div className={styles.submit}>
        <ButtonUI
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
