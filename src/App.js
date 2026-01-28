import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./assets/css/style.css";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPosts";
import Contact from "./components/Contact";

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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
