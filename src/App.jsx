import { Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/Task.css";
import Home from "./Pages/Home";
import Add from "./Pages/Add";

function App() {
  return (
    <>
      <nav>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/add"}>Add task</Link>
        </div>
        <h1>Your Task-Manger</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
