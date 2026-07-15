import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Header />

      <section className="contact-page">
        <div className="container">
          <div className="section-title">
            <small>CONTACT US</small>

            <h2>Let's Build Something Together</h2>

            <p>
              We'd love to hear about your project. Fill out the form below and
              our team will get back to you soon.
            </p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <p>
                Have a question or want to discuss your next project? We'd be
                happy to hear from you.
              </p>

              <div className="contact-item">
                <h4>Email</h4>
                <span>sales@seleneantech.com</span>
              </div>

              <div className="contact-item">
                <h4>Phone</h4>
                <span>+91 98807 19724</span>
              </div>

              <div className="contact-item">
                <h4>Location</h4>
                <span>Bangalore, India</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="primary-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
