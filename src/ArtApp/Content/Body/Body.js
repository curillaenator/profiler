import { ProfileCont } from  "./Pages/Profile/ProfileCont";
import Skills from "./Pages/Skils";
import Works from "./Pages/Works";
import Dialogs from "./Pages/Dialogs";
import { Route } from "react-router-dom";

import styles from "./body.module.scss";

function Body() {
  return (
    <div className={styles.body}>
      <Route path="/profile" render={() => <ProfileCont />} />
      <Route path="/skills" render={() => <Skills />} />
      <Route path="/works" render={() => <Works />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
    </div>
  );
}
export default Body;
