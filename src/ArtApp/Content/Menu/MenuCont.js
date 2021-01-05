import { connect } from "react-redux";
import Menu from "./Menu";

const mapStateToProps = (state) => ({
  buttons: state.ui.menuButtons,
});
const mapDispatchToProps = (dispatch) => ({});

const MenuCont = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuCont;
