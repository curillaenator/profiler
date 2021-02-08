import { connect } from "react-redux";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { login, getCaptcha } from "../../../../../Redux/Reducers/authReducer";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./login.module.scss";

const Login = (props) => {
  const onSubmit = (formData) => {
    return props.login(formData).then((r) => {
      r.resultCode === 10 && props.getCaptcha();
      return r.resultCode !== 0 && { [FORM_ERROR]: r.messages[0] };
    });
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div className={styles.login}>
      <h2>Добро пожаловать в Profiler</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, values, submitError }) => (
          <LoginForm
            handleSubmit={handleSubmit}
            pristine={pristine}
            values={values}
            submitError={submitError}
            captcha={props.captcha}
          />
        )}
      />
    </div>
  );
};

const mstp = (state) => ({
  isAuth: state.auth.isAuth,
  authMessage: state.auth.authMessage,
  captcha: state.auth.captcha,
});

export default connect(mstp, { login, getCaptcha })(Login);
