// import React from "react";
// import About from "../components/About";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";

// const Home = () => {
//   return (
//     <main className="main-content">
//       {/* Optional: Hero / Intro */}
//       <section className="hero" data-page="home">
//         <header className="hero-header">
//           <h1 className="h1 hero-title">Deepa Arya</h1>
//           <p className="hero-subtitle">
//             Full Stack Software Developer | MERN | AWS | PWA | SEO
//           </p>
//         </header>

//         <p className="hero-text">
//           I build scalable web applications with production-grade deployments,
//           performance optimization, and SEO-first architecture.
//         </p>
//       </section>

//       {/* Profile (About page content) */}
//       <About />

//       {/* If you want them separately on Home (optional) */}
//       {/* <Services /> */}
//       {/* <Testimonials /> */}
//     </main>
//   );
// };

// export default Home;
import React, { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Resume", "Projects", "Blog", "Contact"];

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="card sidebar-card">
          <div className="avatar-wrap">
            <img
              src="https://via.placeholder.com/160"
              alt="Deepa Arya"
              className="avatar"
            />
          </div>

          <h2 className="name">Deepa Arya</h2>
          <p className="role">Full Stack Developer</p>

          <div className="divider" />

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon">✉</div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">deepaarya@domain.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">☎</div>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">+91 XXXXXXXXXX</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">India</p>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="social-row">
            <a className="social" href="#" aria-label="LinkedIn">
              in
            </a>
            <a className="social" href="#" aria-label="GitHub">
              gh
            </a>
            <a className="social" href="#" aria-label="Twitter">
              x
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <div className="card main-card">
          {/* TOP NAV */}
          <nav className="topnav">
            {tabs.map((t) => (
              <button
                key={t}
                className={`nav-pill ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
                type="button"
              >
                {t}
              </button>
            ))}
          </nav>

          {/* CONTENT */}
          <section className="content">
            <header className="page-header">
              <h1 className="page-title">{activeTab}</h1>
              <div className="title-accent" />
            </header>

            {activeTab === "Profile" && (
              <>
                <p className="lead">
                  Hi, I’m Deepa Arya — a Full Stack Software Developer working
                  primarily with the MERN stack and AWS. I build scalable web
                  apps with production-grade deployments, secure integrations,
                  and performance-first architecture.
                </p>

                <h2 className="section-title">Why Choose Me?</h2>
                <div className="stack-cards">
                  <div className="stack-card">
                    <h3>Functional & User-Friendly</h3>
                    <p>
                      Clean UX, predictable flows, and maintainable systems.
                    </p>
                  </div>
                  <div className="stack-card">
                    <h3>Cloud & Deployment Ready</h3>
                    <p>
                      AWS (S3, ECS, ECR, EC2, CloudFront, Amplify) + Docker
                      workflows.
                    </p>
                  </div>
                  <div className="stack-card">
                    <h3>Secure Payment Integration</h3>
                    <p>
                      Cashfree payment flows: order creation, checkout, webhook
                      verification, signature validation.
                    </p>
                  </div>
                  <div className="stack-card">
                    <h3>Performance, PWA & SEO</h3>
                    <p>
                      Service workers, caching strategies, Core Web Vitals, and
                      technical SEO foundations.
                    </p>
                  </div>
                </div>

                <h2 className="section-title">My Expertise</h2>
                <div className="grid">
                  <div className="expert-card">
                    <div className="expert-icon">⚛</div>
                    <div>
                      <h3>Frontend (React)</h3>
                      <p>Reusable components, routing, state, performance.</p>
                    </div>
                  </div>

                  <div className="expert-card">
                    <div className="expert-icon">🧠</div>
                    <div>
                      <h3>Backend (Node / Express)</h3>
                      <p>APIs, auth, integrations, scalable service design.</p>
                    </div>
                  </div>

                  <div className="expert-card">
                    <div className="expert-icon">☁</div>
                    <div>
                      <h3>Cloud (AWS)</h3>
                      <p>S3, CloudFront, ECS/ECR, EC2, Amplify deployments.</p>
                    </div>
                  </div>

                  <div className="expert-card">
                    <div className="expert-icon">📈</div>
                    <div>
                      <h3>SEO & Web Performance</h3>
                      <p>Core Web Vitals, indexing, semantic HTML, a11y.</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab !== "Profile" && (
              <div className="placeholder">
                <p>
                  This section is ready. Replace this with your {activeTab} page
                  content.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
