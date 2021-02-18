import { FC } from "react";
import { connect } from "react-redux";
import ButtonLink from "../../../UIComponents/ButtonUI/ButtonLink";
import { AppStateType } from "../../../../Redux/store";
// import { MenuButtons } from "../../../../Types/Types";

import styles from "./menu.module.scss";

type MsProps = {
  buttons: any;
  heigth: number;
};
type MdProps = {};
type Props = MsProps & MdProps;

const Menu: FC<Props> = (props) => {
  return (
    <div className={styles.menu} style={{ height: props.heigth }}>
      {Object.keys(props.buttons).map((btn) => (
        <div className={styles.menuBtn} key={btn}>
          <ButtonLink title={props.buttons[btn]} link={btn} />
        </div>
      ))}
    </div>
  );
};

const mstp = (state: AppStateType) => ({
  buttons: state.ui.menuButtons,
  heigth: state.ui.menuParams.height,
});

export const MenuCont = connect<MsProps, MdProps, {}, AppStateType>(
  mstp,
  {}
)(Menu);
