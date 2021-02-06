import { useState } from "react";
import Loader from "../Loader/Loader";
import ButtonUI from "../ButtonUI/ButtonUI";
import styles from "./pagination.module.scss";

const Pagination = (props) => {
  const { pageQuant, currentQuant } = props;

  const totalPages = Math.ceil(props.totalUsers / props.pageSize);

  const [quant, setQuant] = useState(currentQuant);
  
  const pagesIncr = () => {
    quant + pageQuant < totalPages && setQuant(quant + pageQuant);
    props.pageHandler(quant + pageQuant + 1, quant + pageQuant);
  };
  const pagesDecr = () => {
    quant - pageQuant >= 0 && setQuant(quant - pageQuant);
    props.pageHandler(quant - pageQuant + 1, quant - pageQuant);
  };
  const handle = (pageNum, q = currentQuant) =>
    props.pageHandler(pageNum, q);

  const pages = new Array(pageQuant)
    .fill(1)
    .filter((p, i) => p + i + quant <= totalPages)
    .map((p, i) => p + i + quant);

  return (
    <div className={styles.pagination_track}>
      {props.isFetching && <Loader />}
      <div className={styles.pagination}>
        <div className={styles.prev}>
          <ButtonUI
            title="пред."
            handler={pagesDecr}
            disabled={quant === 0}
            fontsize="10px"
          />
        </div>
        {pages.map((p) => (
          <div className={styles.page} key={p}>
            <ButtonUI
              title={p}
              type={p === props.currentPage && "activated"}
              handler={handle}
              handlerArgs={p}
              fontsize="10px"
            />
          </div>
        ))}
        <div className={styles.next}>
          <ButtonUI
            title="след."
            handler={pagesIncr}
            disabled={currentQuant + pageQuant >= totalPages}
            fontsize="10px"
          />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
