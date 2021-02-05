import { useState } from "react";
import Loader from "../Loader/Loader";
import ButtonUI from "../ButtonUI/ButtonUI";
import styles from "./pagination.module.scss";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.totalUsers / props.pageSize);

  const [quant, setQuant] = useState(props.currentQuant);
  const incr = () => {
    quant + props.pageQuant < totalPages && setQuant(quant + props.pageQuant);
    props.pageHandler(quant + props.pageQuant + 1, quant + props.pageQuant);
  };
  const decr = () => {
    quant - props.pageQuant >= 0 && setQuant(quant - props.pageQuant);
    props.pageHandler(quant - props.pageQuant + 1, quant - props.pageQuant);
  };
  const handle = (pageNum, q = props.currentQuant) =>
    props.pageHandler(pageNum, q);
  const pages = new Array(props.pageQuant)
    .fill(1)
    .map((page, i) => page + i + quant);

  return (
    <div className={styles.pagination_track}>
      {props.isFetching && <Loader />}
      <div className={styles.pagination}>
        <div className={styles.item}>
          <ButtonUI title="<" handler={decr} disabled={quant === 0} />
        </div>
        {pages.map((p) => (
          <div className={styles.item} key={p}>
            <ButtonUI
              title={p}
              type={p === props.currentPage && "activated"}
              handler={handle}
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
