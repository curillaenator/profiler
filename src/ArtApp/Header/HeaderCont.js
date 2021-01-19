import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => ({
  search: state.ui.icons.search,
});
const mapDispatchToProps = (dispatch) => ({});

export const HeaderCont = connect(mapStateToProps, mapDispatchToProps)(Header);
