import React, { Fragment, useRef } from "react";
import "./Footer.scss";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "translateX(-30px)",
    WebkitTransform: isInView ? "none" : "translateX(-30px)",
    MozTransform: isInView ? "none" : "translateX(-30px)",
    msTransform: isInView ? "none" : "translateX(-30px)",
    OTransform: isInView ? "none" : "translateX(-30px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Footer = ({ no_address }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="footer">
      {no_address ? (
        <Fragment></Fragment>
      ) : (
        <div ref={ref} className="footer__address">
          <div className="footer__address-item">
            <h5 style={animation(isInView, 0)}>Head Office</h5>
            <address style={animation(isInView, 0.25)}>
              Grand Wisata Jl. Celebration Boulevard BA1 No. 19-20 Tambun -
              Bekasi 17510 Indonesia
            </address>
          </div>
          <div className="footer__address-item">
            <h5 style={animation(isInView, 0.5)}>Showroom & Warehouse</h5>
            <address style={animation(isInView, 0.75)}>
              Jababeka 2 Industrial Estate Jl. Industri Selatan Blok HH No. 15,
              Pasir Sari Cikarang - Bekasi Indonesia
            </address>
          </div>
        </div>
      )}

      <p className="footer__copyright">
        Copyright &copy; {new Date(Date.now()).getFullYear()} PT. SSI Prima Mas.
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
