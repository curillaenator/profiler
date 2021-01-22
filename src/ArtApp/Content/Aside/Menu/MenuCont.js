import { connect } from "react-redux";
import Menu from "./Menu";

import { menuHeight } from "../../../../Redux/Reducers/uiReducer";

const mapStateToProps = (state) => ({
  buttons: state.ui.menuButtons,
});

const MenuCont = connect(mapStateToProps, { menuHeight })(Menu);
export default MenuCont;
