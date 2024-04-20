import { useState } from "react";
import "./assets/App.css";
import Main from "./pages/Main";
import Board from "./pages/Board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("LOGIN");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main mode={mode} onChange={setMode} />}
          ></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
