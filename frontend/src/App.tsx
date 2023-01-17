import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, Login, Register } from "./layout";

import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Header></Header>
        </div>
        <div className="layout_wrapper">
          <div className="layout_container">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
