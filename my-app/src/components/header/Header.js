import React from "react";
// import { NavLink } from "react-router-dom";
import { IoMdSearch, IoIosNotifications, IoIosContact } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <div className="header-main-cont">
      <div className="left-cont">Facebook</div>
      <div className="center-cont">
        <div className="search-cont">
          <IoMdSearch className="search-icon" />
          <input className="search-input" type="search" />
        </div>
      </div>
      <div className="right-cont">
        <div className="page-cont">
          <p className="home-para">Homepage</p>
          <p className="timeline">Timeline</p>
        </div>
        <div className="notification-cont">
          <div className="badge-cont">
            <IoIosContact className="icons" />
            <span className="badge">1</span>
          </div>
          <div className="badge-cont">
            <MdMessage className="icons" />
            <span className="badge">1</span>
          </div>
          <div className="badge-cont">
            <IoIosNotifications className="icons" />
            <span className="badge">1</span>
          </div>
        </div>
        <img className="profile" src="/assets/profile.jpg" alt="profile" />
      </div>
    </div>
  );
};

export default Header;
