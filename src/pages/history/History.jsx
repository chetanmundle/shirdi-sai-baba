import React from "react";
import { useState } from "react";
// import data from "./data";
import "./history.css";
import Navbar from "../../components/Navbar";
import Social from "../../components/social-icon/Social";
import Footer from "../../components/Footer";
import saiimg from "../../assets/images/saibaba4.jpg";
import regimg from "../../assets/images/templeimgregulation.jpg";
import { motion } from 'framer-motion';
import Bookone from "./Bookone";





const data = [
  { id: 1, question: 'Introduction', answer: < Bookone/> },
  { id: 2, question: 'Mission & Advice', 
  answer: < Bookone/> },
  { id: 3, question: 'Wonderful Incarnation', answer: < Bookone/> },
  { id: 4, question: 'Udi', answer: < Bookone/> },
  { id: 5, question: 'Personality', answer: < Bookone/> },
  { id: 6, question: 'Personal Belongings', answer: < Bookone/> },
  { id: 7, question: 'Chronology', answer: < Bookone/> },

];


const History = () => {
  // const [selected, setSelected] = useState(null);

  // function handleSingleSelection(getCurrentId) {
  //   setSelected(getCurrentId === selected ? null : getCurrentId);
  // }
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };


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
          <span> Home &#9654; About Sanathan &#9654; About Us</span>
        </div>

        <div
          className="about-background"
          style={{ backgroundImage: `url(${saiimg})` }}
        ></div>

        <div className="about-head">
          <h1>History</h1>
        </div>




{/* //acordation */}
{/* <div className="acc-wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
              () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div> */}

 <div className="acc-wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span className="button">{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              {selected === dataItem.id && (
                <motion.div 
                  className="acc-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {dataItem.answer}
                </motion.div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>


        <Footer />
      </div>
    </>
  );
};

export default History;


