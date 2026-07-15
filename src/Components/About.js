import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

import {
  Lightbulb,
  ShieldCheck,
  Users,
  Handshake,
  Leaf,
} from "lucide-react";

const sectionContent = {
  about: {
    tag: "ABOUT US",
    title: "Scaling Heights Through Innovation.",
  },
};

const highlights = [
  {
    icon: <Lightbulb size={32} strokeWidth={1.6} color="#5B5BF6" />,
    title: "Innovation",
    tagline:
      "Developing next-generation semiconductor technologies that accelerate digital transformation.",
    expanded:
      "We invest in emerging design methodologies — including AI-assisted chip design and agentic automation — to stay ahead of the curve rather than react to it.",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.6} color="#5B5BF6" />,
    title: "Quality",
    tagline:
      "Delivering reliable, scalable and high-performance engineering solutions with uncompromised quality.",
    expanded:
      "Every solution we ship goes through rigorous validation, from silicon-level verification to field testing, ensuring what we deliver performs reliably in real-world conditions — not just in the lab.",
  },
  {
    icon: <Users size={32} strokeWidth={1.6} color="#5B5BF6" />,
    title: "Customer Focus",
    tagline:
      "Building long-term partnerships by delivering customized solutions that drive business success.",
    expanded:
      "We work closely with clients from the earliest design conversations through deployment and beyond, treating every engagement as a long-term technology partnership rather than a one-off project.",
  },
  {
    icon: <Handshake size={32} strokeWidth={1.6} color="#5B5BF6" />,
    title: "Collaboration",
    tagline: null,
    expanded:
      "We believe the best engineering happens at the intersection of disciplines. Our teams partner across semiconductor design, embedded systems, and sustainability practices to build solutions no single vertical could deliver alone.",
  },
  {
    icon: <Leaf size={32} strokeWidth={1.6} color="#5B5BF6" />,
    title: "Sustainability",
    tagline: null,
    expanded:
      "Beyond building products, we design with long-term environmental and operational impact in mind — embedding energy efficiency and decarbonization principles into our engineering decisions from day one.",
  },
];

export default function About() {
  return (
    <>
      <Header />

      <section className="about-section about-page">
        <div className="container">
          <div className="about-grid">
            <div className="about-left">
              <span className="section-tag">{sectionContent.about.tag}</span>

              <h2>
                Engineering the
                <br />
                Future of
                <span> Semiconductor Innovation.</span>
              </h2>
            </div>

            <div className="about-right">
              <p>
                <strong>SeleneanTech</strong> is a leading semiconductor
                company committed to advancing technology through
                innovative, reliable, and high-performance semiconductor
                products.
              </p>

              <p>
                With a focus on quality and customer satisfaction, we
                provide solutions that empower industries ranging from
                consumer electronics to automotive.
              </p>

              <p className="about-extra">
                Backed by the engineering depth of UTS, SeleneanTech
                operates at the intersection of silicon design, embedded
                intelligence, and sustainable digital infrastructure. Our
                multidisciplinary teams work across the full technology
                stack — from chip-level IP to edge devices to
                enterprise-scale digital twins — enabling us to solve
                problems that span hardware and software, not just one or
                the other. This full-stack perspective is what allows us
                to move ideas from concept to deployment faster than
                teams working in silos.
              </p>

              <div className="about-highlights">
                {highlights.map((item) => (
                  <div className="highlight" key={item.title}>
                    <div className="highlight-icon">{item.icon}</div>

                    <h3>{item.title}</h3>

                    {item.tagline && <span>{item.tagline}</span>}

                    <p className="highlight-expanded">{item.expanded}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}