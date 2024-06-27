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
              <img src="./rnext-thumb.png" alt="next" />
            </div>
            <div className="right">
              <div className="mt-5 text-whitesmoke ms-4">
                <h4>Title: Reactive Accelerator</h4>
                <h5>Institute: Learn with Sumit</h5>
                <h5>URL: http://learnwithsumit.com</h5>
                <h6>Duration: 5 months</h6>
                <p>
                  Library/Framework: JavaScript, React.js Next.js, Tailwind CSS
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
