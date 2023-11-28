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
                <RiHome8Line />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <MdOutlineWorkHistory />
                Experience
              </div>
              <div className="nav-link">
                <GrTechnology />
                Tech Stack
              </div>
              <div className="nav-link">
                <MdCastForEducation />
                Education
              </div>
              <div className="nav-link">
                <GoProject />
                Projects
              </div>
              <div className="nav-link">
                <MdModelTraining />
                Training
              </div>
              <div className="nav-link">
                <MdOutlineContactEmergency />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <RiHome8Line title="Home" size={27} />
              </div>
              <div className="nav-link">
                <FcAbout title="About" size={27} />
              </div>
              <div className="nav-link">
                <MdOutlineWorkHistory title="Experience" size={27} />
              </div>
              <div className="nav-link">
                <GrTechnology title="Tech Stack" size={27} />
              </div>
              <div className="nav-link">
                <MdCastForEducation title="Education" size={27} />
              </div>
              <div className="nav-link">
                <GoProject title="Projects" size={27} />
              </div>
              <div className="nav-link">
                <MdModelTraining title="Training" size={27} />
              </div>
              <div className="nav-link">
                <MdOutlineContactEmergency title="Contact" size={27} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SidebarMenu;
