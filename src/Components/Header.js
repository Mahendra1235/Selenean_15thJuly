import React, { useState } from "react";
import logo from "../assets/Selenean logo_new.png";
import utsLogo from "../assets/UTS_logo.png";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="wrap nav">
        {/* Selenean Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Selenean Technologies" />
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/#solutions">SOLUTIONS</Link>

          {/* About */}
          <div className="dropdown">
            <div className="dropdown-toggle">
              <Link
                to="/#about"
                className="about-link"
                onClick={() => setShowDropdown(false)}
              >
                ABOUT
              </Link>

              <ChevronDown
                size={16}
                className={`dropdown-arrow ${showDropdown ? "open" : ""}`}
                onClick={toggleDropdown}
              />
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link
                  to="/#about"
                  onClick={() => setShowDropdown(false)}
                >
                  Company Overview
                </Link>

                <Link
                  to="/resources"
                  onClick={() => setShowDropdown(false)}
                >
                  Resources
                </Link>
              </div>
            )}
          </div>

          <Link to="/partners">PARTNERS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        {/* Parent Company */}
        <a
          href="https://univisiontechsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="parent-company"
        >
          <img src={utsLogo} alt="UTS Group" />
        </a>
      </div>
    </header>
  );
}