import React from "react";
import "./ProductModal.scss";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const variants = {
  hidden: {
    opacity: 0,
    zIndex: -1,
    transition: { ease: "backOut", duration: 0.25 },
  },
  show: {
    opacity: 1,
    zIndex: 1000,
    transition: { ease: "backOut", duration: 0.25 },
  },
};

const variants2 = {
  hidden: {
    scale: 0.6,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
  show: {
    scale: 1,
    transition: { ease: "easeInOut", duration: 0.25 },
  },
};

const ProductModal = ({ show, toggleShow, children, title }) => {
  return (
    <motion.div
      className="customModal scrollbar-custom"
      initial={{ opacity: 0, zIndex: -1 }}
      variants={variants}
      animate={show ? "show" : "hidden"}
    >
      <motion.div
        className="customModal-card bg-white max-w-full w-[95%] sm:w-9/12 max-h-[92vh] relative flex flex-col p-4 lg:p-6 rounded-xl"
        initial={{ scale: 0.5 }}
        variants={variants2}
        animate={show ? "show" : "hidden"}
      >
        <button
          onClick={() => {
            toggleShow();
          }}
          className="w-7 h-7 lg:w-5 lg:h-5  2xl:w-6 2xl:h-6 absolute top-3 right-3 cursor-pointer rounded-full z-10"
        >
          <MdOutlineClose color="#242424" className="w-full h-auto" />
        </button>

        <h2 className="text-xl 2xl:text-2xl font-normal pb-3">{title}</h2>

        <div className="h-full overflow-auto">{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
