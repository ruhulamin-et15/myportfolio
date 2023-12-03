import React from "react";
import "./training.css";

const Training = () => {
  return (
    <>
      <div className="container training" id="training">
        <h4 className="text-center text-uppercase mt-2">Training</h4>
        <hr />
        <div className="trainingDevide">
          <div className="top">
            <div className="left">
              <img src="./Mern.png" alt="Mern" />
            </div>
            <div className="right">
              <div className="mt-5 text-whitesmoke ms-4">
                <h4>Title: MERN Stack</h4>
                <h5>Institute: Programming Hero</h5>
                <h5>Location: programming-hero.com</h5>
                <h6>Duration: 6 months</h6>
                <p>
                  Library/Framework: React.js, Node.js, Express.js, Bootstrap,
                  CSS, HTML, JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="bottom mt-2">
            <div className="left">
              <img src="./plc.jpg" alt="plc" />
            </div>
            <div className="right">
              <div className="mt-5 text-whitesmoke ms-4">
                <h4>Title: Microcontroller & Programmable Logic Controller</h4>
                <h5>Institute: National Engineering Development Ltd.</h5>
                <h5>Location: DUET, Joydebpur, Gazipur</h5>
                <h6>Duration: 3 months</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
