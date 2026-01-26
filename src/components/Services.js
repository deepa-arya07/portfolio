import React from "react";

const servicesData = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end MERN application development with clean architecture, reusable components, robust APIs, and scalable database design.",
    icon: "🧩",
  },
  {
    title: "Cloud Deployment (AWS)",
    description:
      "Deploy and manage applications using AWS services like ECS, ECR, EC2, S3, Amplify, and CloudFront with production-ready practices.",
    icon: "☁️",
  },
  {
    title: "Docker & Containerization",
    description:
      "Dockerize apps for consistent environments and streamlined deployments. Experience with container workflows for ECS-based releases.",
    icon: "🐳",
  },
  {
    title: "Media Delivery & CDN Optimization",
    description:
      "Optimize image/video delivery using S3 + CloudFront, caching strategies, and performance patterns to reduce latency and improve UX.",
    icon: "🚀",
  },
  {
    title: "PWA Development",
    description:
      "Build installable web apps with service workers, caching strategies, and offline support for fast and reliable experiences.",
    icon: "📱",
  },
  {
    title: "Performance & Technical SEO",
    description:
      "Improve Core Web Vitals and SEO foundations: semantic HTML, accessibility, indexing, metadata, structured content, and fast load times.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I Do</h3>

      <ul className="service-list">
        {servicesData.map((service, idx) => (
          <li className="service-item" key={idx}>
            <div className="service-icon-box" aria-hidden="true">
              <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                {service.icon}
              </span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
