import React from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Profile</h2>
      </header>

      <section className="about-text">
        <p>
          Hello, I’m Deepa Arya, a Full Stack Software Developer specializing in
          building scalable, high-performance web applications using the MERN
          stack (MongoDB, Express.js, React, and Node.js). I focus on creating
          reliable, maintainable, and user-centric applications designed for
          real-world production environments.
        </p>

        <p>
          I have hands-on experience with cloud and DevOps practices, including
          deploying applications using AWS services such as S3, EC2, ECS, ECR,
          Amplify,CloudFront and Route 53. My work includes Dockerized
          deployments, optimized asset delivery, and scalable architectures for
          serving images and videos efficiently via CDN patterns.
        </p>

        <h3>Payments, Performance, PWA & SEO-Focused Development</h3>

        <p>
          I have also integrated secure payment workflows using Cashfree Payment
          Gateway, implementing server-side order creation, client-side checkout
          flow, and webhook-based payment verification. I focus on secure API
          handling, signature validation, and reliable payment status updates to
          ensure consistent and trustworthy transaction experiences.
        </p>

        <p>
          I also build Progressive Web Applications (PWAs) by implementing
          service workers, caching strategies, and web app manifests to deliver
          fast, reliable, and installable web experiences. My approach
          emphasizes performance optimization, offline support, and improving
          Lighthouse scores and Core Web Vitals such as LCP, FCP, and CLS.
        </p>

        <p>
          Alongside development, I have worked on SEO and understand the
          critical technical foundations needed before building any
          application—semantic HTML, accessibility, clean routing, performance
          optimization, proper indexing, and search-engine-friendly architecture
          to support long-term visibility and growth.
        </p>

        <h3>What I Bring to a Project</h3>
        <ul>
          <li>
            <strong>End-to-End Ownership:</strong> From frontend and backend
            development to deployment and optimization.
          </li>
          <li>
            <strong>Cloud-Native Thinking:</strong> AWS infrastructure with
            containerization and CDN integration for scale.
          </li>
          <li>
            <strong>Payment Integrations:</strong> Secure Cashfree checkout,
            webhook verification, and transaction lifecycle handling.
          </li>
          <li>
            <strong>Performance Engineering:</strong> Caching, bundle
            optimization, and Core Web Vitals improvements.
          </li>
          <li>
            <strong>PWA Expertise:</strong> Offline-first experiences and
            installable apps for better retention.
          </li>
          <li>
            <strong>SEO-Aware Architecture:</strong> Built-in discoverability
            through technical SEO best practices.
          </li>
        </ul>

        <p>
          I aim to build applications that are not only functional but also
          fast, scalable, and future-ready—combining solid engineering
          principles with modern web standards.
        </p>
      </section>

      <Services />
      <Testimonials />
    </article>
  );
};

export default About;
