import React, { useMemo, useState } from "react";
import "../assets/css/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mailtoLink = useMemo(() => {
    const { fullname, email, message } = formData;

    const subject = encodeURIComponent(
      `Message from ${fullname || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    return `mailto:deepa.arya1540@gmail.com?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoLink;
  };

  const { fullname, email, message } = formData;
  const isDisabled = !fullname || !email || !message;

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title="Location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28052.12163269691!2d77.0827558307845!3d28.49414316474658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ecb48154ca3%3A0x9827105904cf8c22!2sDLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1719428278075!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="map-iframe"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={fullname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={message}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="form-btn"
            data-form-btn
            disabled={isDisabled}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
