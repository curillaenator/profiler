import React, { useState } from "react";
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
  pageHandler: (pageNum:number, quant:number ) => void;
};

const Pagination: React.FC<props> = ({
  pageQuant,
  currentQuant,
  totalUsers,
  pageSize,
  isFetching,
  currentPage,
  pageHandler,
}) => {
  const totalPages = Math.ceil(totalUsers / pageSize);

  const [quant, setQuant] = useState(currentQuant);

  const pagesIncr = () => {
    quant + pageQuant < totalPages && setQuant(quant + pageQuant);
    pageHandler(quant + pageQuant + 1, quant + pageQuant);
  };
  const pagesDecr = () => {
    quant - pageQuant >= 0 && setQuant(quant - pageQuant);
    pageHandler(quant - pageQuant + 1, quant - pageQuant);
  };
  const handlePageSelect = (pageNum: number, q = currentQuant) => pageHandler(pageNum, q);

  const pages: Array<number> = new Array(pageQuant)
    .fill(1)
    .filter((p, i) => p + i + quant <= totalPages)
    .map((p, i) => p + i + quant);

  return (
    <div className={styles.pagination_track}>
      {isFetching && <Loader />}
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
            disabled={currentQuant + pageQuant >= totalPages}
            fontsize="10px"
          />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
