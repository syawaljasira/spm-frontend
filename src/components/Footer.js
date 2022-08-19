import React, { Fragment } from "react";
import "./Footer.scss";

const Footer = ({ no_address }) => {
  return (
    <footer className="footer">
      {no_address ? (
        <Fragment></Fragment>
      ) : (
        <div className="footer__address">
          <div className="footer__address-item">
            <h5>Head Office</h5>
            <address>
              Grand Wisata Jl. Celebration Boulevard BA1 No. 19-20 Tambun -
              Bekasi 17510 Indonesia
            </address>
          </div>
          <div className="footer__address-item">
            <h5>Showroom & Warehouse</h5>
            <address>
              Jababeka 2 Industrial Estate Jl. Industri Selatan Blok HH No. 05,
              Pasir Sari Cikarang - Bekasi Indonesia
            </address>
          </div>
        </div>
      )}

      <p className="footer__copyright">
        Copyright &copy; 2021 PT. SSI Prima Mas. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
