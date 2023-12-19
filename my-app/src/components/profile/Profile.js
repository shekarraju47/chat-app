import React from "react";
import Feed from "../feed/Feed";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import RightBar from "../rightbar/RightBar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="profileMainCont">
        <Sidebar />
        <div className="profileWrap">
          <div className="profileCover">
            <img src="/assets/profile2.jpg" alt="" className="coverImg" />
            <img src="/assets/profile1.jpg" alt="" className="profileBadge" />
          </div>
          <div className="userInfoCont">
            <h1 className="userName">Shekar</h1>
            <p className="userDesc">Hi Friends!!!!!!1</p>
          </div>
          <div className="btmCont">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
