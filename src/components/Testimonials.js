import React from "react";
import "../assets/css/style.css";

// Import icons
import avatar1 from "../assets/icons/avatar-1.png";
import avatar2 from "../assets/icons/avatar-2.png";
import avatar3 from "../assets/icons/avatar-3.png";
import avatar4 from "../assets/icons/avatar-4.png";

const testimonials = [
  {
    img: avatar1,
    alt: "Smart Brains",
    name: "Anand Kumar",
    role: "Team Lead, Smart Brains",
    text: "Deepa consistently delivered features on time with excellent quality. Clear communication, strong ownership, and a reliable approach to solving production issues made a real impact.",
  },
  {
    img: avatar2,
    alt: "Sparks Foundation",
    name: "Priya Singh",
    role: "Project Manager, Sparks Foundation",
    text: "Collaborating with Deepa on our web platform was smooth and efficient. Her full stack expertise ensured strong performance, clean delivery, and a great overall user experience.",
  },
  {
    img: avatar3,
    alt: "Pinnacle Civil Service",
    name: "Anish Singh",
    role: "Cloud Architect, Pinnacle Civil Service",
    text: "Deepa’s cloud-first approach and understanding of scalable deployment patterns improved our reliability and performance significantly. Strong problem-solving and excellent technical clarity.",
  },
  {
    img: avatar4,
    alt: "Design Studio",
    name: "Sanjeev Sharma",
    role: "Creative Director, Design Studio",
    text: "From implementation to deployment, Deepa handled everything professionally. The final product was fast, polished, and SEO-friendly, and the workflow was structured and transparent.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((t, idx) => (
          <li className="testimonials-item" key={idx}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={t.img}
                  alt={t.alt}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {t.name}, {t.role}
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>“{t.text}”</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
