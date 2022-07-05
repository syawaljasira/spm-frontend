import React from "react";
import "./NotFoundPage.scss";
import Layout from "../components/Layout";
// animation
import Lottie from "lottie-react";
import packagingAnimation from "../animation/404.json";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="notfound">
        <main className="notfound__main">
          <Lottie animationData={packagingAnimation} loop autoplay />
        </main>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
