import { useState } from "react";
import Loader from "../Loader/Loader";
import ButtonUI from "../ButtonUI/ButtonUI";
import styles from "./pagination.module.scss";

const Pagination = (props) => {
  console.log(props);
  const totalPages = Math.ceil(props.totalUsers / props.pageSize);

  const [start, setStart] = useState(0);

  const incr = () => {
    start + props.pageQuantize < totalPages && setStart(start + props.pageQuantize);
    props.pageHandler(start + props.pageQuantize + 1);
  };
  const decr = () => {
    start - props.pageQuantize >= 0 && setStart(start - props.pageQuantize);
    props.pageHandler(start - props.pageQuantize + 1);
  };

  const pages = new Array(props.pageQuantize).fill(1).map((page, i) => page + i + start);

  return (
    <div className={styles.pagination_track}>
      {props.isFetching ? <Loader /> : null}
      <div className={styles.pagination}>
        <div className={styles.item}>
          <ButtonUI title="<" handler={decr} disabled={start === 0} />
        </div>
        {pages.map((p) => (
          <div className={styles.item} key={p}>
            <ButtonUI
              title={p}
              type={p === props.currentPage && "activated"}
              handler={props.pageHandler}
              handlerArgs={p}
              fontsize="10px"
            />
          </div>
        ))}
        <div className={styles.item}>
          <ButtonUI title=">" handler={incr} />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
