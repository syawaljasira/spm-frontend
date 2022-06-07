import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__brand">
        <img src="/logo192.png" alt="SPM Brand" />
      </span>
      <ul className="navbar__link">
        <Link to="/">
          <li className="navbar__link-item">Home</li>
        </Link>
        <Link to="/">
          <li className="navbar__link-item">Profile</li>
        </Link>
        <Link to="/">
          <li className="navbar__link-item">Products</li>
        </Link>
        <Link to="/">
          <li className="navbar__link-item">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
