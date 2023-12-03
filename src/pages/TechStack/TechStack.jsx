import React from "react";
import "./techstack.css";
import { TechstackList } from "../utils/Techstack";

const TechStack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h4 className="text-center mt-3 text-uppercase">Technologies Stack</h4>
        <hr />
        <p className="text-center text-black">
          inlcuding programming Languages, framwork, databases, front-end and
          back-end tools and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="ailgn-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
