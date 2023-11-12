import React, { useRef } from "react";
import "./Contact.scss";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { MdCall, MdPrint } from "react-icons/md";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Layout>
      <div ref={ref} className="contact">
        <main className="contact__main">
          <div style={animation(isInView, 0)} className="contact__main-maps">
            <h5 style={animation(isInView, 0)} className="maps__title">
              Find Us
            </h5>
            <iframe
              style={animation(isInView, 0.25)}
              className="maps__iframe"
              title="Primary Address"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.4491844390938!2d107.0445237!3d-6.2904254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e285e9447e5%3A0xa316d14ffc8fbd09!2sSSI%20Prima%20Mas!5e0!3m2!1sid!2sid!4v1660581271875!5m2!1sid!2sid"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            style={animation(isInView, 0.5)}
            className="contact__main-address"
          >
            <h5 style={animation(isInView, 0.5)} className="address__title">
              Our Address
            </h5>
            <div
              style={animation(isInView, 0.75)}
              className="contact__main-address-item"
            >
              <h5>Head Office</h5>
              <address>
                Grand Wisata Jl. Celebration Boulevard BA1 No. 19-20 Tambun -
                Bekasi 17510 Indonesia
              </address>
            </div>

            <div
              style={animation(isInView, 1)}
              className="contact__main-address-item"
            >
              <h5>Showroom & Warehouse</h5>
              <address>
                Jababeka 2 Industrial Estate Jl. Industri Selatan Blok HH No.
                15, Pasir Sari Cikarang - Bekasi Indonesia
              </address>
            </div>
          </div>

          <div style={animation(isInView, 1.25)} className="contact__main-telp">
            <h5 style={animation(isInView, 1.25)} className="telp__title">
              Call Us
            </h5>
            <div style={animation(isInView, 1.5)} className="telp__phone">
              <MdCall className="telp__phone-icon" />
              <p className="telp__phone-value">
                Tel: +62 21 2956 6862, 2956 6861
              </p>
            </div>
            <div style={animation(isInView, 1.5)} className="telp__phone">
              <MdPrint className="telp__phone-icon" />
              <p className="telp__phone-value">Fax: +62 21 2956 6860</p>
            </div>
          </div>
        </main>
        <Footer no_address />
      </div>
    </Layout>
  );
};

export default Contact;
