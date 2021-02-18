import { FC } from "react";
import { NavLink } from "react-router-dom";

import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";
import styles from "./findusers.module.scss";
import nullAva from "../../../../../assets/images/nullAva.jpg";

import { SingleUser } from "../../../../../Types/Types";

type Props = {
  user: SingleUser;
  icons: any;
  follower: (id: number) => void;
  unfollower: (id: number) => void;
  whileFollow: Array<number>;
};

const Usercard: FC<Props> = (props) => {
  // console.log(props);

  const followHandler = () =>
    props.user.followed
      ? props.unfollower(props.user.id)
      : props.follower(props.user.id);

  return (
    <div className={styles.usercard}>
      <div className={styles.ava}>
        <NavLink to={`/profile/${props.user.id}`} className={styles.navlink}>
          <img
            src={
              props.user.photos.small === null
                ? nullAva
                : props.user.photos.small
            }
            alt="Avatar"
          />
        </NavLink>
        <div className={styles.button}>
          {props.user.followed ? (
            <ButtonUI
              disabled={props.whileFollow.some((id) => id === props.user.id)}
              title="отписка"
              type={"secondary"}
              handler={followHandler}
              fontsize={"10px"}
            />
          ) : (
            <ButtonUI
              disabled={props.whileFollow.some((id) => id === props.user.id)}
              title="в друзья"
              type={"primary"}
              handler={followHandler}
              fontsize={"10px"}
            />
          )}
        </div>
      </div>
      <div className={styles.data}>
        <h3>{props.user.name}</h3>
        <p>
          {props.user.status === null ? "неопытный гений" : props.user.status}
        </p>
        <div className={styles.tabs}>
          {props.icons.country}
          <p>{"Россия"}</p>
        </div>
        <div className={styles.tabs}>
          {props.icons.city}
          <p>{"Москва"}</p>
        </div>
      </div>
    </div>
  );
};
export default Usercard;
