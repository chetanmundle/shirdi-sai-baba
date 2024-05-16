import React from "react";
import NewsComponent from "../components/NewsComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import regimg from "../assets/images/regulationimg.jpg";

const Regulations = () => {
  return (
    <>
      <Navbar />
      <div
        className="about-background"
        style={{ backgroundImage: `url(${regimg})` }}
      ></div>
      <div>
        <marquee behavior="" direction="">
          🚩
          <span className="about-marquee">
            Shri Saibaba Sansthan Trust, Shirdi
          </span>
          🚩
        </marquee>
        <div className="about-path">
          <span> Home &#9654; About Sanathan &#9654; Ad-hoc-committee</span>
        </div>
        <div className="adhok-head">
          <h1>Ad-Hoc Committee</h1>
        </div>
      </div>
      <div className="regulation-container">
        <div className="regulation-left"></div>
        <div className="regulation-right">
          <NewsComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Regulations;
