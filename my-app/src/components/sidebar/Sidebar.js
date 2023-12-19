import React from "react";
import { MdRssFeed, MdChat, MdGroup, MdEvent } from "react-icons/md";
import { FaCirclePlay, FaBookmark, FaGraduationCap } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarMainCont">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="listItem">
            <MdRssFeed />
            <span className="iconName">Feed</span>
          </li>
          <li className="listItem">
            <MdChat />
            <span className="iconName">Chat</span>
          </li>
          <li className="listItem">
            <FaCirclePlay />
            <span className="iconName">Video</span>
          </li>
          <li className="listItem">
            <MdGroup />
            <span className="iconName">Groups</span>
          </li>
          <li className="listItem">
            <FaBookmark />
            <span className="iconName">Bookmark</span>
          </li>
          <li className="listItem">
            <FaRegQuestionCircle />
            <span className="iconName">Quaestons</span>
          </li>
          <li className="listItem">
            <CgWorkAlt />
            <span className="iconName">Jobs</span>
          </li>
          <li className="listItem">
            <MdEvent />
            <span className="iconName">Events</span>
          </li>
          <li className="listItem">
            <FaGraduationCap />
            <span className="iconName">Courses</span>
          </li>
        </ul>
        <button className="showMoreBtn">Show More</button>
        <hr />
        <ul className="frindList">
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li><li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
          <li className="FrndslistItem">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="frndsIcon"
            />
            <p className="profileName">Shekar</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
