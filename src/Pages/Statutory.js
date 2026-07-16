import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

export default function Statutory() {
  return (
    <>
      <Header />

      <section className="statutory-hero">
        <div className="container">
          <div className="section-title">
            <small>STATUTORY</small>
            <h2>Transparency & Compliance</h2>
            <p>
              Committed to the highest standards of corporate governance,
              regulatory compliance, and transparent financial reporting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
