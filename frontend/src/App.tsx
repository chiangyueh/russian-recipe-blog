import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, Login, Register } from "./layout";
import AddArticle from "./components/AddArticle";
import addArticle from "./mobx/AddArticle";
import "./App.css";
const { observer } = require( "mobx-react-lite/lib/index");
function App() {

  return (
    <div className="App">
      {addArticle.count ? <AddArticle></AddArticle> : ''}
      <header>
        <div className="wrapper">
          <Header></Header>
        </div>
      </header>
      <div className="layout_wrapper">
        <div className="layout_container">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default observer(App);
