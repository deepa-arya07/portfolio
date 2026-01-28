import React from 'react';
// import './Services.css';
import '../assets/css/style.css';

import iconDesign from "../assets/images/icon-design.svg"
import iconDev from "../assets/images/icon-dev.svg"
import iconApp from "../assets/images/icon-app.svg"
import iconPhoto from "../assets/images/icon-photo.svg"


const Services = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">My Expertise</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img src={iconDesign} alt="Frontend (React) icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Frontend (React)</h4>
            <p className="service-item-text">Building responsive, dynamic user interfaces with React for seamless user experiences.</p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img src={iconDev} alt="Backend (Node, Express.js) icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Backend (Node, Express.js)</h4>
            <p className="service-item-text">Developing robust backend solutions with Node.js and Express.js for efficient data handling.</p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img src={iconApp} alt="Cloud Service (AWS) icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Cloud Service (AWS)</h4>
            <p className="service-item-text">Leveraging AWS for scalable, secure cloud solutions and seamless deployment.</p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img src={iconPhoto} alt="Graphics Design(Adobe xd, Figma) icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Graphics Design(Adobe xd, Figma)</h4>
            <p className="service-item-text">Creating visually compelling designs that enhance user engagement and brand identity.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
