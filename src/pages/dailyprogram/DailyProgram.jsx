import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import "./dailyprogram.css";
import { duration } from "@mui/material";
import map from "../../assets/map.png";
import Navbar from "../../components/Navbar";
import Social from "../../components/social-icon/Social";
import Footer from "../../components/Footer";
import saiimg from "../../assets/images/saibaba4.jpg";
import regimg from "../../assets/images/templeimgregulation.jpg";

const DailyProgram = () => {
  return (
    <>
      <div className="about-main">
        <Navbar />
        <Social />
        <marquee behavior="" direction="">
          🚩
          <span className="about-marquee">
            Shri Saibaba Sansthan Trust, Shirdi
          </span>
          🚩
        </marquee>
        <div className="about-path">
          <span> Home &#9654; About Sanathan &#9654; AboutUs</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${regimg})` }}
        ></div>

        <div className="about-head">
          <h1>Daily Programme</h1>
        </div>

        <div className="container">
          <div className="sub-container">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2.5 }}
              className="img1"
            >
              <div className="img-container">
                <img src={map} alt="" />
                <div className="img-title">Heading</div>
              </div>
            </motion.div>
            {/* 
        <motion.div
       animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5}}
            className='img2'
        >
        <div className="img-container">
        <img src={map} alt="" />
        <div className="img-title">Heading</div>
        </div>
        </motion.div>

        <motion.div
       animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5}}
            className='img3'
        >
        <div className="img-container">
        <img src={map} alt="" />
        <div className="img-title">Heading</div>
        </div>
        </motion.div>

        <motion.div
       animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5}}
            className='img4'
        >
        <div className="img-container">
        <img src={map} alt="" />
        <div className="img-title">Heading</div>
        </div>
        </motion.div>

        <motion.div
       animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5}}
            className='img5'
        >
        <div className="img-container">
        <img src={map} alt="" />
        <div className="img-title">Heading</div>
        </div>
        </motion.div>

        <motion.div
       animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5}}
            className='img6'
        >
        <div className="img-container">
        <img src={map} alt="" />
        <div className="img-title">Heading</div>
        </div>
        </motion.div> */}

            <div className="line-container">
              <div className="line">
                <div className="line-circle"></div>
              </div>
              <div className="line2">
                <div className="line-circle"></div>
              </div>
              <div className="line3">
                <div className="line-circle"></div>
              </div>
              <div className="line4">
                <div className="line-circle"></div>
              </div>
              <div className="line5">
                <div className="line-circle"></div>
              </div>
              <div className="line6">
                <div className="line-circle"></div>
              </div>
              <div className="line7">
                <div className="line-circle"></div>
              </div>
              <div className="line8">
                <div className="line-circle"></div>
              </div>
              <div className="line9">
                <div className="line-circle"></div>
              </div>
              <div className="line10">
                <div className="line-circle"></div>
              </div>
              <div className="line11">
                <div className="line-circle"></div>
              </div>
              <div className="line12">
                <div className="line-circle"></div>
              </div>
            </div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="img-container-two">
                <img src={map} alt="" />
                <div className="img-title">Heading</div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DailyProgram;
