import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const WithAuthRedirect = (Component) => {
  const Redirected = (props) =>
    !props.isAuth ? <Redirect to={"/login"} /> : <Component {...props} />;
  const ConnctedRedirected = connect(mapStateToProps)(Redirected);
  return ConnctedRedirected;
};
