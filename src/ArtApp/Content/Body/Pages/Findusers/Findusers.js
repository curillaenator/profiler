import Pagination from "../../../../UIComponents/Pagination/Pagination";
// import ButtonUI from "../../../../UIComponents/ButtonUI/ButtonUI";
import Usercard from "./Usercard";
// import Loader from "../../../../UIComponents/Loader/Loader";

import styles from "./findusers.module.scss";

// const PageLoader = (props) => {
//   const pageNum = props.currentPage + 1;
//   return (
//     <div className={styles.addMore}>
//       {props.isFetching && <Loader />}
//       <div className={styles.addMoreBtn}>
//         <ButtonUI
//           title={`добавить еще ${props.pageSize} пользователя`}
//           handler={props.pageHandler}
//           handlerArgs={pageNum}
//         />
//       </div>
//     </div>
//   );
// };

function Findusers(props) {
  // console.log(props);
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
      {/* <PageLoader
        isFetching={props.isFetching}
        currentPage={props.currentPage}
        pageHandler={props.pageHandler}
        totalUsers={props.totalUsers}
        pageSize={props.pageSize}
      /> */}
    </div>
  );
}
export default Findusers;
