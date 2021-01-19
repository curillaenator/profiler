import User from "./Pages/Profile/User";
import Skills from "./Pages/Skils";
import Works from "./Pages/Works";
import Dialogs from "./Pages/Dialogs";
import { Route } from "react-router-dom";

import styles from "./body.module.scss";

function Body() {
  return (
    <div className={styles.body}>
      <Route path="/user" render={() => <User />} />
      <Route path="/skills" render={() => <Skills />} />
      <Route path="/works" render={() => <Works />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
    </div>
  );
}
export default Body;
