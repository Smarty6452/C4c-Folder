import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../components/logo";
import { MdSpeed, MdNotifications } from "react-icons/md";
import { AiOutlineUser, AiOutlineArrowLeft } from "react-icons/ai";
import { RiNodeTree } from "react-icons/ri";
// import userImg from '../assets/img/user.png'
import Dropup from "./dropup";

const sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Logo className="sidebar-logo" />

        <div className="d-flex min-vh-100">
          <div
            id="sidebar"
            className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
          />
          <div id="sidebar-wrapper" className="min-vh-100">
            <ul className="list-unstyled components">
              {/* <li className="navbar-item">
                <Link to="/employeedashboard" className="nav-link">
                  <MdSpeed className="sidebar-icon mb-1 " size={23}  /> Dashboard
                </Link>
              </li> */}
              <NavLink
                className="navbar-item nav-link"
                to="/employeeDashboard"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                      }
                    : { color: "#545e6f" }
                }
              >
                <MdSpeed className="sidebar-icon mb-1 " size={23} />
                Dashboard
              </NavLink>

              <li className="navbar-item">
                {/* <Link to="/employeelist" className="nav-link">
                  
                  <AiOutlineUser className="sidebar-icon mb-1"size={23} /> Employees List{" "}
                </Link> */}
                <NavLink
                  className="navbar-item nav-link"
                  to="/employeelist"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                        }
                      : { color: "#545e6f" }
                  }
                >
                  <AiOutlineUser className="sidebar-icon mb-1" size={23} />
                  Employee List
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  className="navbar-item nav-link"
                  to="/attendance"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                        }
                      : { color: "#545e6f" }
                  }
                >
                  <RiNodeTree className="sidebar-icon mb-1" size={23} />
                  Attendance
                </NavLink>
                {/* <Link to="/attendance" className="nav-link">
                  <RiNodeTree className="sidebar-icon mb-1" size={23} /> Attendance
                </Link> */}
              </li>
            </ul>

            <ul class="collapse-sidebar-btn">
              <div className="user ">
                {/* <div className="user-img"><img src={userImg} alt="" srcset="" /></div> */}
                <Dropup className="user-img" />
                <div className="notification">
                  <MdNotifications />
                </div>
              </div>
              <li className="c-sidebar ">
                <Link to="/">
                  <AiOutlineArrowLeft />
                  collapse sidebar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default sidebar;
