import React, { useState } from "react";
import "./ruhul.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import Main from "../main/Main";

const Ruhul = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="ruhul">
        <div className="sidebar">
          <div className={toggle ? "sidebar-toggle" : "sidebar"}>
            <div className="sidebar-toggle-icons">
              <p onClick={handleToggle}>
                {toggle ? (
                  <AiOutlineDoubleLeft size={30} />
                ) : (
                  <AiOutlineDoubleRight size={30} />
                )}
              </p>
            </div>
            <div className="sidebarmenue">
              <SidebarMenu toggle={toggle} />
            </div>
          </div>
        </div>
        <div className={toggle ? "main" : "main-toggle"}>
          <Main />
        </div>
      </div>
    </>
  );
};

export default Ruhul;
