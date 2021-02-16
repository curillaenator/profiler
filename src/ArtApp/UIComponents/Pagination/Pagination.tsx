import { FC } from "react";
import Loader from "../Loader/Loader";
import ButtonUI from "../ButtonUI/ButtonUI";
import styles from "./pagination.module.scss";

type props = {
  pageQuant: number; //qty of shown pages' buttons
  currentQuant: number; //qty of pages skiped
  totalUsers: number;
  pageSize: number; // qty of users per page
  isFetching: boolean; // is now waiting for responce from server
  currentPage: number; // selected page to show
  pageHandler: (pageNum: number, quant: number) => void;
};

const Pagination: FC<props> = ({
  pageQuant,
  currentQuant,
  totalUsers,
  pageSize,
  isFetching,
  currentPage,
  pageHandler,
}) => {
  const ttlPgs = Math.ceil(totalUsers / pageSize);
  const Q = currentQuant;

  const pagesIncr = () =>
    Q + pageQuant < ttlPgs && pageHandler(Q + pageQuant + 1, Q + pageQuant);

  const pagesDecr = () =>
    Q - pageQuant >= 0 && pageHandler(Q - pageQuant + 1, Q - pageQuant);

  const handlePageSelect = (pageNum: number, q = Q) => pageHandler(pageNum, q);

  const pages: Array<number> = new Array(pageQuant)
    .fill(1)
    .filter((page, i) => page + i + Q <= ttlPgs)
    .map((page, i) => page + i + Q);

  return (
    <div className={styles.pagination_track}>
      {isFetching && <Loader />}
      <div className={styles.pagination}>
        <div className={styles.prev}>
          <ButtonUI
            title="пред."
            handler={pagesDecr}
            disabled={Q === 0}
            fontsize="10px"
          />
        </div>
        {pages.map((p) => (
          <div className={styles.page} key={p}>
            <ButtonUI
              title={p}
              type={p === currentPage && "activated"}
              handler={handlePageSelect}
              handlerArgs={p}
              fontsize="10px"
            />
          </div>
        ))}
        <div className={styles.next}>
          <ButtonUI
            title="след."
            handler={pagesIncr}
            disabled={Q + pageQuant >= ttlPgs}
            fontsize="10px"
          />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
