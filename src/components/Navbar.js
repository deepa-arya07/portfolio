// import React from 'react';
// import '../assets/css/style.css';

// const Navbar = ({ activePage, setActivePage }) => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item">
//           <button
//             className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
//             onClick={() => setActivePage('about')}
//           >
//             About
//           </button>
//         </li>
//         <li className="navbar-item">
//           <button
//             className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
//             onClick={() => setActivePage('resume')}
//           >
//             Resume
//           </button>
//         </li>
//         <li className="navbar-item">
//           <button
//             className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`}
//             onClick={() => setActivePage('portfolio')}
//           >
//             Portfolio
//           </button>
//         </li>
//         <li className="navbar-item">
//           <button
//             className={`navbar-link ${activePage === 'blog' ? 'active' : ''}`}
//             onClick={() => setActivePage('blog')}
//           >
//             Blog
//           </button>
//         </li>
//         <li className="navbar-item">
//           <button
//             className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`}
//             onClick={() => setActivePage('contact')}
//           >
//             Contact
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link" onClick={() => navigate("/profile")}>
            {/* About */}
            Profile
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={() => navigate("/resume")}>
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={() => navigate("/projects")}>
            {/* Portfolio */}
            Projects
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={() => navigate("/blog")}>
            Blog
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" onClick={() => navigate("/contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
