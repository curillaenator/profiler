import { BrowserRouter } from "react-router-dom";

import Header from "./Header/Header";
import Content from "./Content/Content";

function ArtApp(props) {
  return (
    <BrowserRouter>
      <div className="artapp">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}
export default ArtApp;
