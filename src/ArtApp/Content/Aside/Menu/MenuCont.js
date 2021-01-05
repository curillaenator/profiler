import { connect } from "react-redux";
import Menu from "./Menu";

import { actionMenuHeight } from "../../../../Redux/Reducers/uiReducer";

const mapStateToProps = (state) => ({
  buttons: state.ui.menuButtons,
});
const mapDispatchToProps = (dispatch) => ({
  menuHeight: (height) => dispatch(actionMenuHeight(height)),
});

const MenuCont = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuCont;
