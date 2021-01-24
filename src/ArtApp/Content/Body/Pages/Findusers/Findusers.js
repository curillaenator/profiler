import SButtonUI from "../../../../UIComponents/ButtonUI/sButtonUI";
import Usercard from "./Usercard";
import Loader from "../../../../UIComponents/Loader/Loader";

import styles from "./findusers.module.scss";

const Pagination = (props) => {
  //   const pagesCnt = Math.ceil(props.totalusers / props.pagesize);
  //   console.log(pagesCnt);
  const pages = new Array(8).fill(0).map((e, i) => i + 1);
  return (
    <div className={styles.pagination_track}>
      {props.isFetching ? <Loader /> : null}
      <div className={styles.pagination}>
        {pages.map((p) => (
          <div className={styles.item} key={p}>
            <SButtonUI
              title={p}
              type={p === props.currentpage && "activated"}
              handler={props.pageHandler}
              handlerArgs={p}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function Findusers(props) {
  // console.log(props);
  return (
    <div className={styles.findusers}>
      <div className={styles.searchbox}></div>
      <Pagination
        isFetching={props.isFetching}
        currentpage={props.currentpage}
        pageHandler={props.pageHandler}
        totalusers={props.totalusers}
        pagesize={props.pagesize}
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
