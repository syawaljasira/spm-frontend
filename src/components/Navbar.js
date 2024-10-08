import React, { useState } from "react";
import "./Navbar.scss";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { pathname } = useLocation();

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutUs = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  const handleEnvironment = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight + window.innerHeight / 3,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  const handleAboutUsMobile = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight - window.innerHeight * 0.1,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <nav className="navbar navbar-light">
      <span className="navbar__brand flex">
        <Link onClick={scrollUp} to="/">
          <img src="/logo192.png" alt="SPM Brand" />
        </Link>
      </span>
      <ul className="navbar__link">
        <Link onClick={scrollUp} to="/">
          <li className="navbar__link-item">Home</li>
        </Link>
        {pathname === "/" ? (
          <a href="/#about-us">
            <li className="navbar__link-item">About Us</li>
          </a>
        ) : (
          <Link onClick={handleAboutUs} to="/">
            <li className="navbar__link-item">About Us</li>
          </Link>
        )}
        {pathname === "/" ? (
          <a href="/#environment">
            <li className="navbar__link-item">Environment</li>
          </a>
        ) : (
          <Link onClick={handleEnvironment} to="/">
            <li className="navbar__link-item">Environment</li>
          </Link>
        )}
        <Link to="/products">
          <li className="navbar__link-item">Products</li>
        </Link>
        <Link to="/contact">
          <li className="navbar__link-item">Contact</li>
        </Link>
      </ul>
      <MdMenu className="navbar__menu" onClick={toggleNav} />
      <div className={`offcanvas ${showNav ? "show-nav" : "hidden-nav"}`}>
        <span className="offcanvas__close">
          <MdOutlineClose
            onClick={toggleNav}
            className="offcanvas__close-icon"
          />
        </span>
        <div className="offcanvas__nav">
          <Link onClick={toggleNav} className="offcanvas__nav-link" to="/">
            Home
          </Link>
          {pathname !== "/" ? (
            <Link
              onClick={() => {
                toggleNav();
                handleAboutUsMobile();
              }}
              className="offcanvas__nav-link"
              to="/"
            >
              About Us
            </Link>
          ) : (
            <a
              onClick={toggleNav}
              className="offcanvas__nav-link"
              href="#about-us"
            >
              About Us
            </a>
          )}
          {pathname !== "/" ? (
            <Link
              onClick={() => {
                toggleNav();
                handleEnvironment();
              }}
              className="offcanvas__nav-link"
              to="/"
            >
              Environment
            </Link>
          ) : (
            <a
              onClick={toggleNav}
              className="offcanvas__nav-link"
              href="#environment"
            >
              Environment
            </a>
          )}
          <Link
            onClick={toggleNav}
            className="offcanvas__nav-link"
            to="/products"
          >
            Products
          </Link>
          <Link
            onClick={toggleNav}
            className="offcanvas__nav-link"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
