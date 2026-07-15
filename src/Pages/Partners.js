import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

import partner1 from "../assets/Tescom logo.png";
import partner2 from "../assets/Trakmate Logo.jpg";
import partner3 from "../assets/Eldaas logo.jpg";
import partner4 from "../assets/Analog-chips logo.webp";

const partners = [
  {
    name: "Partner 1",
    logo: partner1,
  },
  {
    name: "Partner 2",
    logo: partner2,
  },
  {
    name: "Partner 3",
    logo: partner3,
  },
    {
      name: "Partner 4",
      logo: partner4,
    },
];

export default function Partners() {
  return (
    <>
      <Header />

      <section className="partners-page">
        <div className="container">
          <div className="section-title">
            <small>OUR PARTNERS</small>

            <h2>Trusted Technology Partners</h2>

            <p>
              We collaborate with leading technology companies to deliver
              innovative semiconductor, embedded, AI, and sustainable digital
              solutions for our customers.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner) => (
              <div className="partner-card" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
