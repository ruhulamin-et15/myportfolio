import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container" id="contact">
        <div>
          <h3 className="text-decoration-underline mb-3">Contact with me</h3>
          <form>
            <div>
              <input
                className="form-control mb-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                className="form-control mb-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button className="btn btn-success form-control">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
