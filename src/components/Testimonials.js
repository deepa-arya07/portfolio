import React from "react";

const testimonialsData = [
  {
    name: "Project Stakeholder",
    role: "Product / Operations",
    feedback:
      "Deepa consistently delivered features on time with excellent quality. Clear communication, strong ownership, and a reliable approach to solving production issues made a real impact.",
    avatar: "👤",
  },
  {
    name: "Team Member",
    role: "Frontend / Full Stack",
    feedback:
      "Very strong in MERN and deployments. Deepa helped streamline Docker-based releases and improved performance by applying caching and CDN best practices.",
    avatar: "👤",
  },
  {
    name: "Client / Collaborator",
    role: "Business Partner",
    feedback:
      "The application was fast, stable, and SEO-friendly. Deepa ensured smooth delivery and explained technical decisions clearly, which made collaboration easy.",
    avatar: "👤",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list">
        {testimonialsData.map((t, idx) => (
          <li className="testimonials-item" key={idx}>
            <div className="testimonials-card">
              <div className="testimonials-header">
                <div className="testimonials-avatar" aria-hidden="true">
                  <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                    {t.avatar}
                  </span>
                </div>

                <div className="testimonials-meta">
                  <h4 className="h4 testimonials-name">{t.name}</h4>
                  <p className="testimonials-role">{t.role}</p>
                </div>
              </div>

              <p className="testimonials-text">“{t.feedback}”</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
