import React, { useRef } from 'react';
import { delay, motion, useInView } from 'framer-motion';
import "./dailyprogram.css"
import { duration } from '@mui/material';
import map from "../../assets/map.png"

const DailyProgram = () => {
//   const experienceRef = useRef();
//   const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
   Shedule
      </motion.h1>


<div className="sub-container">

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className=""
        >


        <div className="img-container">
          {/* <div className="img-details">
            <div className="img-title">Heading</div>
             </div> */}
        <img src={map} alt="" />

        </div>

        </motion.div>

        <div className="line-container">
          <div className="line">
          <div className="line-circle"></div>
          </div>
           <div className="line-two">
          <div className="line-circle"></div>
          </div>
          </div>

        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration:1}}
        className=""
        >
        <div className="img-container-two">
          {/* <div className="img-details">
            <div className="img-title">Heading</div>
             </div> */}
        <img src={map} alt="" />

        </div>
        </motion.div>
        

    </div>
        </div>
  );
};

export default DailyProgram;