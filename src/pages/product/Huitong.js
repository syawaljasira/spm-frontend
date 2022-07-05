import React from "react";
import "./Huitong.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Huitong = () => {
  const subtitle = [
    "Jiangyin Huitong Packaging Machinery Co., Ltd was founded in 1996 and majored with advanced series of soft packaging equipment. Huitong passed ISO9001-2015 which means the quality system can support much on the management. The Mission of “facing to the world by innovation” leads Huitong to constantly improve the quality of the main products. Following the industry tread, absorbing new technology and embracing the competing marketing makes Huitong timely launch new products to meet customer needs. The precise equipments of 3 Japanese MAZAK-600 and 10 Yawei3016 from Taiwan is the quality guarantee of our products.",

    "With the excellent after-sales service team in more 20 cities Huitong will try all the best to serve for our customers. Huitong encourages people to improve their ability by continuous learning and their commitments are the key success factor of the company. We will never stop learning and developing!",
  ];

  return (
    <Layout>
      <div className="huitong">
        <ProductHeader
          title="Huitong"
          image="/images/logo/huitong-logo.png"
          subtitle={subtitle}
        />
        <main className="huitong__main">
          <div className="product__card">
            <h3 className="product__card-title">
              1. Huitong HT Bag Making Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-ht-bag-making-machine.jpg"
                alt="Huitong Product 1"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Roll size</h6>
                <p>: φ600mm, Max width 1200mm (material storage optional)</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bag-making speed</h6>
                <p>20~80cpm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bag making form and size</h6>
                <p>: Transverse bag-making Feeding direction</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bottom sealing</h6>
                <p>: Max.80mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Side sealing</h6>
                <p>: Max.60mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Total output</h6>
                <p>: 65kw</p>
              </div>
              <div className="product__card-body-item">
                <h6>Pueumatic source</h6>
                <p>: 0.8Mpa</p>
              </div>
              <div className="product__card-body-item">
                <h6>Cooling water</h6>
                <p>: 5L</p>
              </div>
              <div className="product__card-body-item">
                <h6>Weight</h6>
                <p>: 9T</p>
              </div>
              <div className="product__card-body-item">
                <h6>Overall dimension</h6>
                <p>: 20000*2500*1900mm</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">
              2. Huitong Laminating Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-laminating.jpg"
                alt="Huitong Product 2"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Laminating material</h6>
                <p>: Plastic film, Paper, Aluminium, etc.</p>
              </div>
              <div className="product__card-body-item">
                <h6>Laminating width</h6>
                <p>: 1250mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Mechanical speed</h6>
                <p>: 450m/min</p>
              </div>
              <div className="product__card-body-item">
                <h6>Unwind web dia</h6>
                <p>: Φ800mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Rewind web dia</h6>
                <p>: Φ800mm</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">
              3. Huitong Printing Press Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-printing-press.jpg"
                alt="Huitong Product 3"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Print material</h6>
                <p>: BOPP PET PVC PE NY Paper</p>
              </div>
              <div className="product__card-body-item">
                <h6>Print width</h6>
                <p>: 1100 1300</p>
              </div>
              <div className="product__card-body-item">
                <h6>Mechanical speed</h6>
                <p>: 400m/min</p>
              </div>
              <div className="product__card-body-item">
                <h6>Plate cylinder</h6>
                <p>: φ120mm~φ320mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Unwind, rewind web dia</h6>
                <p>: φ800mm</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Huitong;
