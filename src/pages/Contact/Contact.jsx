import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactImg from "../../assets/images/contact.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container" id="contact">
        <h4>CONTACT ME</h4>
        <hr />
        <div className="contact">
          <div id="left">
            <div id="link">
              <p>
                <FaLinkedin /> Linkedin:{" "}
                <a href="https://www.linkedin.com/in/ruhulamin-et15/">
                  https://linkedin.com/in/ruhulamin-et15
                </a>
              </p>
              <p>
                <FaFacebook /> Facebook:{" "}
                <a href="https://facebook.com/MRA.ET15">
                  https://facebook.com/MRA.ET15
                </a>
              </p>
              <address>
                <MdEmail /> Email:{" "}
                <a href="mailto:ruhulamin.et15@gmail.com">
                  ruhulamin.et15@gmail.com
                </a>
              </address>
              <p>
                <FaWhatsapp /> WhatsApp:{" "}
                <span className="text-primary">+8801762717397</span>
              </p>
            </div>
          </div>
          <div id="right">
            <img src={ContactImg} alt="contact" width={500} height={210} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
