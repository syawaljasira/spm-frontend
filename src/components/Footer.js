import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div id="contact" className="footer__gap"></div>
      <div className="footer__contactUs">
        <form className="footer__contactUs-card">
          <h4 className="form-title">Contact Us</h4>
          <span className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Nama" />
          </span>
          <span className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </span>
          <span className="input-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message"
            />
          </span>
          <span className="form-btn">
            <button>Send</button>
          </span>
        </form>
      </div>
      <div className="footer__address">
        <div className="footer__address-item">
          <h5>Our Office</h5>
          <address>
            Grand Wisata, Jl. Celbration Boulevard Blok. BA 1 No. 19-20 Tambun -
            Bekasi 17510 Indonesia
          </address>
        </div>
        <div className="footer__address-item">
          <h5>Showroom & Warehouse</h5>
          <address>
            Jababeka 2 Industrial Estate Jl. Industri Selatan Blok HH No. 05,
            Pasir Sari. Cikarang - Bekasi Indonesia
          </address>
        </div>
        <p className="footer__copyright">
          Copyright &copy; 2021 PT. SSI Prima Mas. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
