import React from "react";
import "./Layout.scss";
import Navbar from "./Navbar";

const Layout = ({ children, changeNavbar }) => {
  return (
    <div className="layout">
      <Navbar changeNavbar={changeNavbar} />
      <div className="layout__container">{children}</div>
    </div>
  );
};

export default Layout;
