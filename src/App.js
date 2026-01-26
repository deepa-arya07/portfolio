import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./assets/css/style.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/profile" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
