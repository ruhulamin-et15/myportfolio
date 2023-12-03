import "./sidebarmenu.css";
import { RiHome8Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import {
  MdOutlineWorkHistory,
  MdCastForEducation,
  MdModelTraining,
  MdOutlineContactEmergency,
} from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GoProject } from "react-icons/go";

const SidebarMenu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="nav-profile-img">
            <img src="/ruhul.jpg" alt="profile img" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <a href="#home">
                  <RiHome8Line />
                  Home
                </a>
              </div>
              <div className="nav-link">
                <a href="#about">
                  <FcAbout />
                  About
                </a>
              </div>
              <div className="nav-link">
                <a href="#techstack">
                  <GrTechnology />
                  Tech Stack
                </a>
              </div>

              <div className="nav-link">
                <a href="#projects">
                  <GoProject />
                  Projects
                </a>
              </div>
              <div className="nav-link">
                <a href="#training">
                  <MdModelTraining />
                  Training
                </a>
              </div>
              <div className="nav-link">
                <a href="#education">
                  <MdCastForEducation />
                  Education
                </a>
              </div>
              <div className="nav-link">
                <a href="#experience">
                  <MdOutlineWorkHistory />
                  Experience
                </a>
              </div>
              <div className="nav-link">
                <a href="#contact">
                  <MdOutlineContactEmergency />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <a href="#home">
                  <RiHome8Line title="Home" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#about">
                  <FcAbout title="About" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#techstack">
                  <GrTechnology title="Tech Stack" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#projects">
                  <GoProject title="Projects" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#training">
                  <MdModelTraining title="Training" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#education">
                  <MdCastForEducation title="Education" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#experience">
                  <MdOutlineWorkHistory title="Experience" size={27} />
                </a>
              </div>
              <div className="nav-link">
                <a href="#contact">
                  <MdOutlineContactEmergency title="Contact" size={27} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SidebarMenu;
