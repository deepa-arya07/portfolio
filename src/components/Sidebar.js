import React, { useState } from "react";
import "../assets/css/style.css";
// import linkedin from "../assets/icons/linkedin-icon-2.svg";
// import github from "../assets/icons/github-icon-1.svg";
import avatar1 from "../assets/images/my_pic.png";

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <aside className={`sidebar ${sidebarActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar1} alt="Deepa Arya" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Deepa Arya">
            Deepa Arya
          </h1>
          <p className="title">Full Stack Software Developer</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setSidebarActive((prev) => !prev)}
          type="button"
        >
          <span>{sidebarActive ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {/* Email */}
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:deepaarya@ssccglpinnacle.com"
                className="contact-link"
              >
                deepa.arya1540@gmail.com
              </a>
            </div>
          </li>

          {/* Contact Form (anchors to your Contact section/page) */}
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Contact</p>
              <a href="#contact" className="contact-link">
                Send a message
              </a>
            </div>
          </li>

          {/* Location (optional but safe) */}
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {/* LinkedIn */}
          <li className="social-item">
            <a
              href="https://linkedin.com/in/deepa-arya-57a83b17a/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          {/* GitHub */}
          <li className="social-item">
            <a
              href="http://github.com/deepa-arya07"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
