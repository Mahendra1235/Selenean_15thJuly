import React from "react";
import logo from "../assets/Selenean logo_new.png";
import utsLogo from "../assets/UTS_logo.png";
import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to="/#about">ABOUT</Link>
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
