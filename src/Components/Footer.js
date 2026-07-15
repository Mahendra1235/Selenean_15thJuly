import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineGlobe } from "react-icons/hi";

import logo from "../assets/Footer-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Company */}
          <div className="footer-company">
            <img
              src={logo}
              alt="Selenean Technologies"
              className="footer-logo"
            />

            <p>
              Engineering intelligent solutions that empower a connected,
              sustainable and better tomorrow.
            </p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/selenean-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.seleneantech.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
              >
                <HiOutlineGlobe size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4>Solutions</h4>

            <ul>
              <li>
                <Link to="/semiconductor">Semiconductor</Link>
              </li>

              <li>
                <Link to="/embedded">Embedded Systems</Link>
              </li>

              <li>
                <Link to="/sds">Sustainable Digital Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4>Company</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>

            <p>
              <Mail size={18} />
              <span>sales@seleneantech.com</span>
            </p>

            <p>
              <Phone size={18} />
              <span>+91 98807 19724</span>
            </p>

            <div className="locations">
              <h5>Corporate Office</h5>

              <p className="address">
                <MapPin size={18} />

                <span>
                  Nandi Infotech, KIADB Plot No. 8,
                  <br />
                  1st Cross, Sadaramangala Road,
                  <br />
                  Mahadevapura Post,
                  <br />
                  Bengaluru – 560048
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Selenean Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}