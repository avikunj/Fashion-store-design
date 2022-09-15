import Home from "./component/home/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Viewproduct from "./component/viewproduct/couple/Couple";

import Dresses from "./component/viewproduct/dress/Dress";
import Dresses1 from "./component/viewproduct/dress/Dress1";
import Dresses2 from "./component/viewproduct/dress/Dress2";
import Dresses3 from "./component/viewproduct/dress/Dress3";
import Dresses4 from "./component/viewproduct/dress/Dress4";
import Dressswiper from "./component/viewproduct/dress/dressswiper";

function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewproduct" element={<Viewproduct/>} />
          <Route path="/Dress" element={<Dresses/>} />
          <Route path="/Dress1" element={<Dresses1/>} />
          <Route path="/Dress2" element={<Dresses2/>} />
          <Route path="/Dress3" element={<Dresses3/>} />
          <Route path="/Dress4" element={<Dresses4/>} />
          <Route path="/dressswiper" element={<Dressswiper/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
