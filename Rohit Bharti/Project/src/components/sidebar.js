import React from "react";
import Logo from "../components/logo";
import { MdSpeed } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiNodeTree } from "react-icons/ri";

const sidebar = () => {
  return (
    <>
    <div className="sidebar">

  
    <Logo className="sidebar-logo" />
          <div className="nav-links">
            <ul>
              <li>
                <MdSpeed className="sidebar-icon" />
                <a href="#">Dashboard</a>
              </li>
              <li>
                <AiOutlineUser className="sidebar-icon" />
                <a href="#">Employee List</a>
              </li>
              <li>
                <RiNodeTree className="sidebar-icon" />
                <a href="#">Attendance</a>
              </li>
            </ul>
          </div>

       

          <ul className="sidebar_collapse_button">
            
            <li><a href="#">Collapse Sidebar</a></li>
          </ul>
          </div>
          </>
  );
};

export default sidebar;
