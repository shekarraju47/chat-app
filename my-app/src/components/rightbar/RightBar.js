import React from "react";

import "./rightbar.css";
import Online from "../onlineFriends/Online";

import { Users } from "../../dummy";

const RightBar = ({ profile }) => {
  const RightBarHomePage = () => {
    return (
      <>
        <div className="addCont">adds In this</div>
        <div className="friendCont">
          <h3 className="frndTitle">Online Friends</h3>
          <ul className="profileCont">
            {Users.map((item) => (
              <Online key={item.id} items={item} />
            ))}
          </ul>
        </div>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div className="UserInfoCont">
        <h3>User Information</h3>
        <div className="detailInformation">
          <p className="cityDetail">City: Mancherial</p>
          <p className="FromDetail">From: Telangana</p>
          <p className="relationDetails">RelationShip: Single</p>
        </div>
        <div className="userFrndCont">
          <h3 className="frndsHeading">User Friends</h3>
          <div className="frndListMainCont">
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
            <div className="frndsDetlsCont">
              <img
                src="/assets/profile2.jpg"
                alt=""
                className="frndProfileImg"
              />
              <p className="frndName">Shekar</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rightMainCont">
      <div className="rightBarWrapper">
        {!profile ? <RightBarHomePage /> : <ProfileRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
