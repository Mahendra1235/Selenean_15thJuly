import React from "react";
import Header from "../Components/Header";
import "../App.css";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  Cpu,
  CircuitBoard,
  Leaf,
} from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Semiconductor",
    icon: <Cpu size={42} strokeWidth={1.6} />,
    link: "/semiconductor",
    description: (
      <>
        <p>Offering products and solutions for cutting-edge semiconductor technologies in the following areas:</p>
        <ul>
          <li>Flow automation using AI/ML</li>
          <li>Silicon-proven SoC IP</li>
          <li>Ready-to-chip solutions using Agentic AI</li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "Embedded Systems",
    icon: <CircuitBoard size={42} strokeWidth={1.6} />,
    link: "/embedded",
    description: (
      <>
        <p>Building innovative IoT products for real world applications catering to different industries the following have been prototyped.</p>
        <ul>
          <li>IoT sensors for Automotive</li>
          <li>Digital smart meters</li>
          <li>NVidia Jetson based IoT Platform</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Sustainable Digital Solutions",
    icon: <Leaf size={42} strokeWidth={1.6} />,
    link: "/sds",
    description: (
      <>
        <p>Driving sustainability and operational excellence through Digital Twins, AI-driven analytics, energy optimization and decarbonization with the following IP's.</p>
        <ul>
          <li>UniAIPower</li>
          <li>UniAIDC</li>
          <li>UniAIIoT</li>
        </ul>
      </>
    ),
  },
];



const sectionContent = {
  solutions: {
    tag: "OUR SOLUTIONS",
    title: "Engineering Solutions Built for Tomorrow."
  },

  // whoWeAre: {
  //   tag: "WHO WE ARE",
  //   title: "Engineering Innovation with Purpose"
  // },

  about: {
    tag: "ABOUT US",
    title: "Scaling Heights Through Innovation."
  }
};

export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);

    if (element) {
      setTimeout(() => {
        const headerHeight = 90; // Adjust to your header height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }
}, [location]);
  return (
    <>
      <Header />

<section id="solutions" className="business-section">
        <div className="container">

          <div className="section-heading">

            <span>{sectionContent.solutions.tag}</span>

            <h2>{sectionContent.solutions.title}</h2>

          </div>

          <div className="cards">

            {cards.map((card) => (

              <div className="card" key={card.number}>

                <div className="icon">
                  {card.icon}
                </div>

               <h3>{card.title}</h3>

<div className="card-description">
  {card.description}
</div>

<Link to={card.link} className="learn-more">
  Learn More →
</Link>

                <span className="number">
                  {card.number}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* <section className="vision-mission">

        <div className="container">

          <div className="section-heading">

            <span>{sectionContent.whoWeAre.tag}</span>

            <h2>{sectionContent.whoWeAre.title}</h2>

            <p className="section-description">
              We are committed to building intelligent semiconductor
              solutions that empower next-generation technologies
              through innovation, collaboration, and engineering excellence.
            </p>

          </div>

          <div className="vm-grid">
            <div className="vm-card">

              <div className="vm-icon">
                <Eye size={38} strokeWidth={1.6} color="#5B5BF6" />
              </div>

              <h3>Our Vision</h3>

              <p>
                To be a leading force in the semiconductor ecosystem,
                delivering innovation in IP, SoC frameworks,
                and design enablement platforms that accelerate
                the world's most ambitious chip development programs.
              </p>

            </div>

            <div className="vm-card">
              <div className="vm-icon">
                <Target size={38} strokeWidth={1.6} color="#5B5BF6" />
              </div>

              <h3>Our Mission</h3>

              <p>
                To simplify and streamline the semiconductor design
                process by providing end-to-end turnkey solutions,
                modular IP frameworks, and engineering services
                that reduce complexity, cost, and time-to-market.
              </p>

            </div>

          </div>

        </div>

      </section> */}

<section id="about" className="about-section">
        <div className="container">

          <div className="about-grid">

            <div className="about-left">

              <span className="section-tag">
                {sectionContent.about.tag}
              </span>

              <h2>
                Scaling Heights
                <br />
               
                <span> Through Innovation</span>
              </h2>

            </div>

            <div className="about-right">

              <p>
                <strong>SeleneanTech</strong> is a leading Technology company committed to developing innovative products starting ASIC's to Full Stack System Products through innovative, reliable, and high-performance solutions.
              </p>

              <p>
                With a focus on quality and customer satisfaction, we provide solutions that empower industries like Semiconductors, Automotive, Hyperscalar Data Centres and Industrial IoT.
              </p>

              <div className="about-highlights">

                <div className="highlight">

                  <h3>Innovation</h3>

                  <span>
                    Developing next-generation
                    technologies that accelerate digital transformation.
                  </span>

                </div>

                <div className="highlight">

                  <h3>Quality</h3>

                  <span>
                    Delivering reliable, scalable and high-performance
                    engineering solutions with uncompromised quality.
                  </span>

                </div>

                <div className="highlight">

                  <h3>Customer Focus</h3>

                  <span>
                    Building long-term partnerships by delivering
                    customized solutions that drive business success.
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <Footer/>

    </>
  );
}