import React from "react";
import Home from "../../pages/Home/Home";
import "./main.css";
import About from "../../pages/About/About";
import TechStack from "../../pages/TechStack/TechStack";
import Projects from "../../pages/Projects/Projects";

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
        <div className="section5">section5</div>
        <div className="section6">section6</div>
      </div>
    </>
  );
};

export default Main;
