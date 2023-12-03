import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h4 className="text-center mt-2 text-uppercase">
          Educational Background
        </h4>
        <hr />
        <VerticalTimeline className="vertical">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "whitesmoke",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "whitesmoke" }}
            icon={<FaUserGraduate />}
          >
            <h4 className="vertical-timeline-element-title">
              Diploma in Engineering
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Rangpur Polytechnic Institute, Bangladesh
            </h5>
            <h6 className="mt-2">Department of Electrical Technology</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "whitesmoke",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <h4 className="vertical-timeline-element-title">
              Higher Secondary Certificate
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Badarganj Govt. College, Rangpur
            </h5>
            <h6 className="mt-2">Science</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "whitesmoke",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <h4 className="vertical-timeline-element-title">
              Secondary School Certificate
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Ehiaganj Dakhil Madrasah, Rangpur
            </h5>
            <h6 className="mt-2">Science</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
