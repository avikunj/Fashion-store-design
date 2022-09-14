import Home from "./component/home/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
