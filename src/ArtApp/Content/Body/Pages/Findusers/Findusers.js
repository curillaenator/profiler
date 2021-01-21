import SButtonUI from "../../../../UIComponents/ButtonUI/sButtonUI";
import Usercard from "./Usercard";

import styles from "./findusers.module.scss";

const Pagination = (props) => {
//   const pagesCnt = Math.ceil(props.totalusers / props.pagesize);
//   console.log(pagesCnt);
  const pages = new Array(5).fill(0).map((e, i) => i + 1);
  return (
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
  );
};

function Findusers(props) {
  return (
    <div className={styles.findusers}>
      <div className={styles.searchbox}></div>
      <Pagination
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
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
}
export default Findusers;
