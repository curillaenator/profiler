import React from "react";
import { Form } from "react-final-form";
import LoginForm from "./LoginForm";
import styles from "./login.module.scss";

class Login extends React.Component {
  onSubmit = (formData) => console.log(formData);
  render() {
    return (
      <div className={styles.login}>
        <h2>Добро пожаловать в Profiler</h2>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine }) => (
            <LoginForm handleSubmit={handleSubmit} pristine={pristine} />
          )}
        />
      </div>
    );
  }
}
export default Login;
