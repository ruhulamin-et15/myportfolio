import React from "react";
import MyImage from "../../assets/images/ruhul.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="container about" id="about">
        <div className="left">
          <img src={MyImage} alt="ruhul" />
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am Md. Ruhul Amin, born on June 1st, 1999, hails from Rangpur. A
            Diploma Degree of Rangpur Polytechnic Institute in 2019, I am a
            dedicated individual with a passion for web development. With a
            strong foundation in technology and programming acquired through
            time at Rangpur Polytechnic Institute, I'm brings creativity and
            innovation to every project. Committed to pushing the boundaries of
            web development/creating user-friendly and aesthetically pleasing
            websites. In free time, i'm enjoying delving into the latest trends
            and technologies in web development, constantly seeking to enhance
            my skills and expand knowledge base. With a keen eye for design and
            functionality, poised to make a significant impact in the field of
            web development and beyond.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
