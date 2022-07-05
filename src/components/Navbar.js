import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [navbar, setNavbar] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const changeBgNavbar = () => {
      if (isBrowser) {
        if (window.scrollY >= 5) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }
    };

    window.addEventListener("scroll", changeBgNavbar);

    return () => {
      window.removeEventListener("scroll", changeBgNavbar);
    };
  }, [isBrowser]);

  return (
    <nav
      className={`navbar ${
        props.changeNavbar
          ? navbar
            ? "navbar-light"
            : "navbar-transparent"
          : "navbar-light"
      }`}
    >
      <span className="navbar__brand">
        <Link to="/">
          <img src="/logo192.png" alt="SPM Brand" />
        </Link>
      </span>
      <ul className="navbar__link">
        <Link to="/">
          <li className="navbar__link-item">Home</li>
        </Link>
        <a href="/#about-us">
          <li className="navbar__link-item">About Us</li>
        </a>
        <Link to="/products">
          <li className="navbar__link-item">Products</li>
        </Link>
        <a href="#contact">
          <li className="navbar__link-item">Contact</li>
        </a>
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
            <Link onClick={toggleNav} className="offcanvas__nav-link" to="/">
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
          <Link
            onClick={toggleNav}
            className="offcanvas__nav-link"
            to="/products"
          >
            Products
          </Link>
          <a
            onClick={toggleNav}
            className="offcanvas__nav-link"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
