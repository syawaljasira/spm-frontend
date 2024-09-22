import React, { useRef, useState } from "react";
import "./Primeblade.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";
import ReactPlayer from "react-player";
import ProductModal from "../../components/product/ProductModal";
import { useInView } from "framer-motion";
import Spinner from "../../components/Spinner";

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

const animation2 = (isInView, delay) => {
  let style = {
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const htmlPrimeblade = {
  primeblade: {
    title: "Doctor Blade",
    data: () => {
      return (
        <div className="product_wrapper w-full flex flex-col space-y-5 lg:space-y-3">
          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6 text-justify">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-nano-i.png"
                alt="nano-i"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8">
              <div className="flex flex-col">
                <h6 className="font-light text-xl lg:text-lg">Nano I</h6>
                <span className="font-extralight text-sm lg:text-xs">
                  High-carbon steel
                </span>
              </div>
              <div className="flex flex-col space-y-2 text-base lg:text-sm">
                <p>
                  We currently offer Nano blades made from three different
                  premium quality Swedish steels: Nano I: High-carbon steel
                </p>
                <p>
                  The Nano blade types have been tailored to meet the demands
                  from our customers with regards to blade lifetime, print
                  quality and ease of use.
                </p>
                <div>
                  <b className="font-light">
                    PrimeBlade Nano series advantages
                  </b>
                  <ul className="text-start">
                    <li>&#8210; Long lifetime</li>
                    <li>
                      &#8210; Environmentally friendly treatment, free from
                      hazardous chemicals
                    </li>
                  </ul>
                </div>
                <div>
                  <b className="font-light">Available for all inks</b>
                  <p>Solvent - Nano I</p>
                </div>
                <p>Unique and based on patented technology</p>
              </div>
            </div>
          </div>

          <hr className="pb-5 lg:pb-4" />

          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6 text-justify">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-nano-ii.png"
                alt="nano-ii"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8">
              <div className="flex flex-col">
                <h6 className="font-light text-xl lg:text-lg">Nano II</h6>
                <span className="font-extralight text-sm lg:text-xs">
                  Special Treated Stainless Steel
                </span>
              </div>
              <div className="flex flex-col space-y-2 text-base lg:text-sm">
                <p>
                  We currently offer Nano blades made from three different
                  premium quality Swedish steels: Nano II - Martensitic
                  stainless steel
                </p>
                <p>
                  The Nano blade types have been tailored to meet the demands
                  from our customers with regards to blade lifetime, print
                  quality and ease of use.
                </p>
                <div>
                  <b className="font-light">
                    PrimeBlade Nano series advantages
                  </b>
                  <ul className="text-start">
                    <li>&#8210; Long lifetime</li>
                    <li>
                      &#8210; Environmentally friendly treatment, free from
                      hazardous chemicals
                    </li>
                  </ul>
                </div>
                <div>
                  <b className="font-light">Available for all inks</b>
                  <p>Water based - Nano II</p>
                </div>
                <p>Unique and based on patented technology</p>
              </div>
            </div>
          </div>

          <hr className="pb-5 lg:pb-4" />

          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6 text-justify">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-nano-iii.png"
                alt="nano-iii"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8">
              <div className="flex flex-col">
                <h6 className="font-light text-xl lg:text-lg">Nano III</h6>
                <span className="font-extralight text-sm lg:text-xs">
                  Special Treated Alloyed Tool Steel
                </span>
              </div>
              <div className="flex flex-col space-y-2 text-base lg:text-sm">
                <p>
                  We currently offer Nano blades made from three different
                  premium quality Swedish steels: Nano III - Tool steel
                </p>
                <p>
                  The Nano blade types have been tailored to meet the demands
                  from our customers with regards to blade lifetime, print
                  quality and ease of use.
                </p>
                <div>
                  <b className="font-light">
                    PrimeBlade Nano series advantages
                  </b>
                  <ul className="text-start">
                    <li>&#8210; Long lifetime</li>
                    <li>
                      &#8210; Environmentally friendly treatment, free from
                      hazardous chemicals
                    </li>
                  </ul>
                </div>
                <div>
                  <b className="font-light">Available for all inks</b>
                  <p>Abrasive, e.g., white - Nano III</p>
                </div>
                <p>Unique and based on patented technology</p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // doctor_blades: {
  //   title: "Doctor Blades",
  //   data: () => {
  //     return (
  //       <div className="product_wrapper w-full flex">
  //         <div className="w-full lg:w-9/12 h-auto flex justify-center items-center mx-auto">
  //           <img
  //             className="w-full h-auto object-contain"
  //             src="/images/products/primeblade-docter-blade.jpg"
  //             alt="Doctor Blades"
  //           />
  //         </div>
  //       </div>
  //     );
  //   },
  // },

  // nano_products: {
  //   title: "Nano Products",
  //   data: () => {
  //     return (
  //       <div className="product_wrapper w-full flex">
  //         <div className="w-full lg:w-9/12 h-auto flex justify-center items-center mx-auto">
  //           <img
  //             className="w-full h-auto object-contain"
  //             src="/images/products/primeblade-nano-blade.jpg"
  //             alt="Nano Products"
  //           />
  //         </div>
  //       </div>
  //     );
  //   },
  // },

  profiles: {
    title: "PrimeBlade cutter",
    data: () => {
      return (
        <div className="product_wrapper w-full flex flex-col space-y-6">
          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-profiles.jpg"
                alt="Primeblade Product 1"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8">
              <div className="flex flex-col space-y-2 text-base lg:text-sm text-justify">
                <p>
                  The PrimeBlade cutter simplifies the cutting of blades into
                  exact lengths. Together with the doctor blade cassette, it
                  makes the blade handling very easy and efficient. The cutter
                  is produced with high quality knives, made from special steel.
                </p>

                <div className="text-start">
                  <ul>
                    <li>&#8210; Standard lengths 1300mm, 1500mm and 1700mm</li>
                    <li>
                      &#8210; Length can be tailor made according to requirement
                    </li>
                    <li>&#8210; Blade thickness up to 0,38 mm</li>
                    <li>&#8210; Blade width from 8 mm up to 80 mm</li>
                    <li>
                      &#8210; End stops, adjustable to match the required length
                    </li>
                    <li>
                      &#8210; Measurement scale, for setting the correct blade
                      length
                    </li>
                    <li>&#8210; Light weight and easy to handle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  angle_gauge: {
    title: "Angle Gauge",
    data: () => {
      return (
        <div className="product_wrapper w-full flex flex-col">
          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 space-x-0 lg:space-x-6">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-angle-gauge.jpg"
                alt="Primeblade Angle Gauge"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8 text-justify">
              <div className="flex flex-col space-y-2">
                <p className="text-base">
                  Setting the correct blade angle is of utmost importance to
                  secure a high quality print and to minimize the wear on the
                  doctor blade.
                </p>
                <p className="text-base">
                  We therefore proudly offer our angle gauge, that helps gravure
                  printers to easily set the correct blade angle. The angle
                  gauge is highly portable and can be kept in a pocket - a handy
                  tool to use when changing doctor blades.
                </p>

                <hr className="border-black !my-4" />

                <p className="text-base lg:text-sm">
                  The PrimeBlade Angle Gauge comes in two sizes. One from
                  circumference 300mm to 785mm and the other from circumference
                  785mm to &gt;6.280mm.
                </p>
                <p className="text-base lg:text-sm">
                  Each gauge is delivered in a plastic pouch for protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  seals: {
    title: "PrimeSeals",
    data: () => {
      return (
        <div className="product_wrapper w-full flex">
          <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 space-x-0 lg:space-x-6">
            <div className="w-full lg:w-4/12 h-auto flex shrink-0">
              <img
                className="w-full h-auto object-contain"
                src="/images/products/primeblade-primeseals.jpg"
                alt="PrimeSeals"
              />
            </div>
            <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8 text-justify">
              <div className="flex flex-col">
                <h6 className="font-light text-lg">ZVK</h6>
              </div>
              <p className="flex text-base">
                The ZVK seal is based on synthetic rubber with a very long
                lifetime. ZVK is often used for oil based or UV inks. It is
                stiffer than other seals but has good shape memory. Most rubbers
                are sensitive to light and air, which is why it must always be
                stored properly packed and protected. Prolonged exposure will
                deteriorate the material.
              </p>
            </div>
          </div>
        </div>
      );
    },
  },

  // cutter: {
  //   title: "Doctor Blade Cutter",
  //   data: () => {
  //     return (
  //       <div className="product_wrapper w-full flex">
  //         <div className="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 space-x-0 lg:space-x-6">
  //           <div className="w-full lg:w-4/12 h-auto flex shrink-0">
  //             <img
  //               className="w-full h-auto object-contain"
  //               src="/images/products/primeblade-doctor-blade-cutter.jpg"
  //               alt="Profile 50"
  //             />
  //           </div>
  //           <div className="w-full flex flex-col space-y-5 pr-0 lg:pr-8 text-justify">
  //             <div className="flex flex-col">
  //               <h6 className="font-light text-lg">Profile 50</h6>
  //             </div>
  //             <p className="flex text-base">
  //               Most commonly used edge today in both flexo and gravure.
  //               Constant contact area during wear. Lower friction and wear
  //               against roller. Standard dimension 1,3/0,07mm for gravure and
  //               1,3/0,10mm for flexo, but can be produced according to
  //               requirement.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   },
  // },
};

const Primeblade = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const [isReady, setReady] = useState(false);
  const [isShow, setShow] = useState(false);
  const [data, setData] = useState({ render: () => {} });

  const subtitle = [
    "A global manufacturer and supplier of Doctor Blades for flexo, gravure, offset printers, and coating applications. Together with Swedish raw material supplier and end users the doctor blade was produced to improve production quality, blade life, and to increase machine speeds.",
  ];

  const handlePlayerReady = () => {
    setReady(true);
  };

  const handleShow = (key) => {
    if (isShow || key === "") {
      setData({ title: "", render: () => {} });
      setShow(false);
    } else {
      setData({
        title: htmlPrimeblade[key].title,
        render: htmlPrimeblade[key].data,
      });
      setShow(true);
    }
  };

  console.log(isReady);

  return (
    <>
      {isShow && (
        <ProductModal
          show={isShow}
          toggleShow={() => setShow(!isShow)}
          title={data?.title}
        >
          {data?.render()}
        </ProductModal>
      )}

      <Layout>
        <div ref={ref} className="primeblade">
          <>
            {!isReady && (
              <div className="h-[90vh] flex justify-center items-center">
                <Spinner className={"w-10 h-10"} />
              </div>
            )}

            <div
              style={animation2(isInView, 0.25)}
              className={`player_wrapper ${isReady ? "" : "hidden"}`}
            >
              <ReactPlayer
                className={`react-player`}
                // url="https://player.vimeo.com/video/878300349?muted=1&autoplay=1&loop=1&transparent=0&background=1&player_id=0&app_id=58479"
                // url="https://www.youtube.com/watch?v=zNnoMh4qOns"
                url={`/images/primeblade.mp4?muted=1&autoplay=1&loop=1&transparent=0&background=1&playsinline=1`}
                frameBorder="0"
                width="100%"
                height="100%"
                loop
                autoplay
                playing={isReady}
                muted
                playsinline
                onReady={handlePlayerReady}
                style={{
                  visibility: isReady ? "visible" : "hidden",
                }}
              />

              {/* <ReactPlayer
              className="react-player"
              url="/video/primeblade.mp4"
              width="100%"
              height="100%"
              loop
              playing
              muted
            /> */}
            </div>

            <div className={`${isReady ? "flex flex-col" : "hidden"}`}>
              <ProductHeader
                title="Primeblade"
                image="/images/logo/primeblade-logo.png"
                subtitle={subtitle}
              />
              <main ref={ref2} className="primeblade__main">
                <div
                  style={animation(isInView2, 0)}
                  onClick={() => handleShow("primeblade")}
                  className="primeblade__main-product cursor-pointer"
                >
                  <h6>DOCTOR BLADE</h6>
                  <img
                    className="transition-hover"
                    src="/images/products/primeblade-ori.png"
                    alt="Primeblade Product 1"
                    style={{
                      backgroundColor: "#F9F9F9",
                    }}
                  />
                </div>

                {/* <div
                style={animation(isInView2, 0.25)}
                onClick={() => handleShow("doctor_blades")}
                className="primeblade__main-product cursor-pointer"
              >
                <h6>DOCTOR BLADES</h6>
                <img
                  className="transition-hover"
                  src="/images/products/primeblade-docter-blade.jpg"
                  alt="Primeblade Product 1"
                />
              </div>
  
              <div
                style={animation(isInView2, 0.5)}
                onClick={() => handleShow("nano_products")}
                className="primeblade__main-product cursor-pointer"
              >
                <h6>NANO PRODUCTS</h6>
                <img
                  className="transition-hover"
                  src="/images/products/primeblade-nano-blade.jpg"
                  alt="Primeblade Product 2"
                />
              </div> */}

                <div
                  style={animation(isInView2, 0.75)}
                  onClick={() => handleShow("profiles")}
                  className="primeblade__main-product cursor-pointer"
                >
                  <h6>PRIMEBLADE CUTTER</h6>
                  <img
                    className="transition-hover"
                    src="/images/products/primeblade-profiles.jpg"
                    alt="Primeblade Product 3"
                  />
                </div>

                {/* <div
                style={animation(isInView2, 1)}
                onClick={() => handleShow("cutter")}
                className="primeblade__main-product cursor-pointer"
              >
                <h6>DOCTOR BLADE CUTTER</h6>
                <img
                  className="transition-hover"
                  src="/images/products/primeblade-doctor-blade-cutter.jpg"
                  alt="Primeblade Product 4"
                />
              </div> */}

                <div
                  style={animation(isInView2, 1.25)}
                  onClick={() => handleShow("seals")}
                  className="primeblade__main-product cursor-pointer"
                >
                  <h6>PRIMESEALS</h6>
                  <img
                    className="transition-hover"
                    src="/images/products/primeblade-primeseals.jpg"
                    alt="Primeblade Product 5"
                  />
                </div>

                <div
                  style={animation(isInView2, 1.5)}
                  onClick={() => handleShow("angle_gauge")}
                  className="primeblade__main-product cursor-pointer"
                >
                  <h6>ANGLE GAUGE</h6>
                  <img
                    className="transition-hover"
                    src="/images/products/primeblade-angle-gauge.jpg"
                    alt="Primeblade Product 6"
                  />
                </div>
              </main>

              <Footer />
            </div>
          </>
        </div>
      </Layout>
    </>
  );
};

export default Primeblade;
