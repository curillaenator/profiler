import { FC } from "react";
import Pagination from "../../../../UIComponents/Pagination/Pagination";
import Usercard from "./Usercard";
import { SingleUser } from "../../../../../Types/Types";

import styles from "./findusers.module.scss";

type props = {
  pageQuant: number; //qty of shown pages' buttons
  currentQuant: number; //qty of pages skiped
  totalUsers: number;
  pageSize: number; // qty of users per page
  isFetching: boolean; // is now waiting for responce from server
  currentPage: number; // selected page to show
  whileFollow: Array<number> // array of ids fetching for server response on follow/unfollow
  icons: any;
  users: Array<SingleUser>;
  follower: (id:number) => void;
  unfollower: (id:number) => void;
  pageHandler: (pageNum: number, quant: number) => void;
};

const Findusers: FC<props> = (props) => {
  return (
    <div className={styles.findusers}>
      <div className={styles.searchbox}></div>
      <Pagination
        isFetching={props.isFetching}
        currentPage={props.currentPage}
        pageHandler={props.pageHandler}
        totalUsers={props.totalUsers}
        pageSize={props.pageSize}
        pageQuant={props.pageQuant}
        currentQuant={props.currentQuant}
      />
      <div className={styles.users}>
        {props.users.map((u) => (
          <Usercard
            user={u}
            key={u.id}
            icons={props.icons}
            follower={props.follower}
            unfollower={props.unfollower}
            whileFollow={props.whileFollow}
          />
        ))}
      </div>
    </div>
  );
}
export default Findusers;
