import React, { useState, useEffect } from "react";
import logo from "../assets/Selenean logo_new.png";
import utsLogo from "../assets/UTS_logo.png";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
    setShowResources(false);
  };

  useEffect(() => {
    const closeMenus = () => {
      setShowDropdown(false);
      setShowResources(false);
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);

  return (
    <header>
      <div className="wrap nav">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Selenean Technologies" />
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/#solutions">SOLUTIONS</Link>

          {/* ABOUT */}
          <div className="dropdown">
            <div className="dropdown-toggle">
              <Link
                to="/#about"
                className="about-link"
                onClick={() => {
                  setShowDropdown(false);
                  setShowResources(false);
                }}
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
              <div
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Company Overview */}
                <Link
                  to="/#about"
                  onClick={() => {
                    setShowDropdown(false);
                    setShowResources(false);
                  }}
                >
                  Company Overview
                </Link>

                {/* Resources */}
                <div
                  className="dropdown-sub"
                  onMouseEnter={() => setShowResources(true)}
                  onMouseLeave={() => setShowResources(false)}
                >
                  <div className="dropdown-item">
                    <span>Resources</span>
                    <ChevronRight size={16} />
                  </div>

                  {showResources && (
                    <div className="dropdown-submenu">
                      <Link
                        to="/statutory"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowResources(false);
                        }}
                      >
                        Statutory
                      </Link>
                    </div>
                  )}
                </div>
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