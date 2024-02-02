import React from "react";
import "./projects.css";
import { ProjectList } from "../utils/ProjectList";
// import { ProjectList } from "../utils/ProjectList";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h4 className="text-center mt-3 text-uppercase">Top Recent Projects</h4>
        <hr />
        <p className="text-center text-black">
          Here are my top 3 recent project with live links and source code.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem
          odit, ut eligendi nulla pariatur ad esse corrupti totam aperiam modi
          est ducimus vitae at. Quasi laborum asperiores id similique vitae
          fugit accusantium ullam, sapiente hic odit sunt accusamus? Repellat ad
          asperiores molestias itaque reprehenderit odio deleniti! Neque,
          architecto consectetur.
        </p>
        <div className="row" id="ads">
          {ProjectList.map((project) => (
            <div className="col-md-4 mt-4" key={project._id}>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">{project.notify}</span>
                  <img src={project.card_img} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-2">
                  <span className="card-detail-badge">{project.badge1}</span>
                  <span className="card-detail-badge">{project.badge2}</span>
                  <span className="card-detail-badge">{project.badge3}</span>
                  <span className="card-detail-badge">{project.badge4}</span>
                </div>
                <div className="card-body">
                  <div className="ad-title ">
                    <h5 className="text-uppercase text-center">
                      {project.name}
                    </h5>
                  </div>
                  <a href={project.link}>View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
