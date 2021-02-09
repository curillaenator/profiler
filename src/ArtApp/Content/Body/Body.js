import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import User from "./Pages/Profile/User";
import Login from "./Pages/Login/Login";
import Welcome from "./Pages/Welcome/Welcome";
import Loader from "../../UIComponents/Loader/Loader";

import styles from "./body.module.scss";

const FindusersCont = React.lazy(() =>
  import("./Pages/Findusers/FindusersCont")
);
const Skills = React.lazy(() => import("./Pages/Skils"));
const Works = React.lazy(() => import("./Pages/Works"));
const Dialogs = React.lazy(() => import("./Pages/Dialogs"));

function Body() {
  return (
    <div className={styles.body}>
      <Route exact path="/" render={() => <Welcome />} />
      <Route path="/profile/:userId?" render={() => <User />} />
      <Route path="/Login" render={() => <Login />} />
      <Suspense fallback={<Loader />}>
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/works" render={() => <Works />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/findusers" render={() => <FindusersCont />} />
      </Suspense>
    </div>
  );
}
export default Body;
