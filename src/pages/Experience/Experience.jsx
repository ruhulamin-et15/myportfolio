import React from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <div className="container experience" id="experience">
        <h4 className="text-center mt-2 text-uppercase">Experience</h4>
        <hr />
        <VerticalTimeline className="vertical">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "whitesmoke",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "whitesmoke" }}
            icon={<BsPersonWorkspace />}
          >
            <h4 className="vertical-timeline-element-title">
              Assistant Engineer
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Networld Technology Ltd.
            </h5>
            <h6 className="mt-2">Software & Hardware</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "whitesmoke",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsPersonWorkspace />}
          >
            <h4 className="vertical-timeline-element-title">
              Front-End Developer
            </h4>
            <h5 className="vertical-timeline-element-subtitle">Daraz BD</h5>
            <h6 className="mt-2">Ecommerce App</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
