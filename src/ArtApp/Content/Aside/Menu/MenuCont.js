import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";

import { menuHeight } from "../../../../Redux/Reducers/uiReducer";

class MenuDraw extends React.Component {
  componentDidMount() {
    const hCalc =
      Object.keys(this.props.buttons).length * 40 +
      16 * (Object.keys(this.props.buttons).length - 1);
    this.props.menuHeight(hCalc);
  }
  render() {
    return <Menu heigth={this.props.heigth} buttons={this.props.buttons} />;
  }
}

const mapStateToProps = (state) => ({
  buttons: state.ui.menuButtons,
  heigth: state.ui.menuParams.height,
});

const MenuCont = connect(mapStateToProps, { menuHeight })(MenuDraw);
export default MenuCont;
