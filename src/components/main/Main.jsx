import React from "react";
import Home from "../../pages/Home/Home";
import "./main.css";
import About from "../../pages/About/About";
import TechStack from "../../pages/TechStack/TechStack";
import Projects from "../../pages/Projects/Projects";
import Experience from "../../pages/Experience/Experience";
import Training from "../../pages/Training/Training";
import Education from "../../pages/Education/Education";
import Contact from "../../pages/Contact/Contact";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="section1">
          <Home />
        </div>
        <div className="section2">
          <About />
        </div>
        <div className="section3">
          <TechStack />
        </div>
        <div className="section4">
          <Projects />
        </div>
        <div className="section5">
          <Training />
        </div>
        <div className="section6">
          <Experience />
        </div>
        <div className="section7">
          <Education />
        </div>
        <div className="section8">
          <Contact />
        </div>
        <footer className="text-center">
          <small>
            ©Portfolio Webpage. All rights reserved. Ruhul Amin,
            Dhaka-Bangladesh.
          </small>
        </footer>
      </div>
    </>
  );
};

export default Main;
