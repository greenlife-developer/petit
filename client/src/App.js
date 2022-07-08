import React from "react";
import Nav from "./components/Home/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;