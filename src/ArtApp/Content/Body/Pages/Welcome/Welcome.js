import styles from "./welcome.module.scss";
import { connect } from "react-redux";
import welcomeBG from "../../../../../assets/images/welcomeBG.jpg";

const Techs = (props) => {
  return Object.keys(props.techs).map((el) => (
    <div className={styles.tech} key={el}>
      <p>
        <b>{el}</b>
        {props.techs[el]}
      </p>
    </div>
  ));
};

const Account = (props) => {
  return Object.keys(props.account).map((el) => (
    <div key={el}>
      <p>
        <b>{el}</b>
        <span>: </span>
        {props.account[el]}
      </p>
    </div>
  ));
};

const Welcome = (props) => {
  return (
    <div className={styles.welcome}>
      <img src={welcomeBG} alt={props.welcome} />

      <h2>{props.welcome}</h2>

      <div className={styles.intro}>
        <h3>{props.intro.main}</h3>
        <p>{props.intro.technology}</p>
        <Techs techs={props.techs} />
        <p>{props.intro.conclusion}</p>
      </div>

      <div className={styles.testAccount}>
        <h3>{props.testAccount.text}</h3>
        <Account account={props.testAccount.login} />
      </div>
    </div>
  );
};

const mstp = (state) => ({
  welcome: state.welcome.welcome,
  intro: state.welcome.intro,
  techs: state.welcome.techs,
  testAccount: state.welcome.testAccount,
});

export default connect(mstp, {})(Welcome);
