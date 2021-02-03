import { connect } from "react-redux";
import { Form } from "react-final-form";
import { login } from "../../../../../Redux/Reducers/authReducer";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./login.module.scss";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

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
          />
        )}
      />
    </div>
  );
};

const mstp = (state) => ({
  isAuth: state.auth.isAuth,
  authMessage: state.auth.authMessage,
});

export default connect(mstp, { login })(Login);
