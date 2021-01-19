import { BrowserRouter } from "react-router-dom";

import { HeaderCont } from "./Header/HeaderCont";
import Content from "./Content/Content";

function ArtApp(props) {
  return (
    <BrowserRouter>
      <div className="artapp">
        <HeaderCont />
        <Content />
      </div>
    </BrowserRouter>
  );
}
export default ArtApp;
