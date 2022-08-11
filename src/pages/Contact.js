import React from "react";
import "./Contact.scss";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { MdCall, MdPrint } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <main className="contact__main">
          <div className="contact__main-maps">
            <h5 className="maps__title">Find Us</h5>
            <iframe
              className="maps__iframe"
              title="Primary Address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6243196749874!2d107.15637521744384!3d-6.312983000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b1a966b2acf%3A0x734761bc06e91f80!2sPT.%20SSI%20Prima%20Mas!5e0!3m2!1sid!2sid!4v1659368559773!5m2!1sid!2sid"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact__main-address">
            <h5 className="address__title">Our Address</h5>
            <div className="contact__main-address-item">
              <h5>Head Office</h5>
              <address>
                Grand Wisata Jl. Celebration Boulevard BA1 No. 19-20 Tambun -
                Bekasi 17510 Indonesia
              </address>
            </div>

            <div className="contact__main-address-item">
              <h5>Surabaya Branch</h5>
              <address>
                Jl. Simo Tambaan Sekolahan No.61F Surabaya - Jawa Timur 60181
                Indonesia
              </address>
            </div>

            <div className="contact__main-address-item">
              <h5>Showroom & Warehouse</h5>
              <address>
                Jababeka 2 Industrial Estate Jl. Industri Selatan Blok HH No.
                05, Pasir Sari Cikarang - Bekasi Indonesia
              </address>
            </div>
          </div>

          <div className="contact__main-telp">
            <h5 className="telp__title">Call Us</h5>
            <div className="telp__phone">
              <MdCall className="telp__phone-icon" />
              <p className="telp__phone-value">
                Tel: +62 21 2956 6862, 2956 6861
              </p>
            </div>
            <div className="telp__phone">
              <MdPrint className="telp__phone-icon" />
              <p className="telp__phone-value">Fax: +62 21 2956 6860</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Contact;
