import React from "react";

import "./online.css";

const Online = (props) => {
  const { profileImg, userName } = props.items;
  return (
    <li className="itemCont">
      <img src={profileImg} alt="profile" className="profileImg" />
      <span className="onLineBadge"></span>
      <p className="profileName">{userName}</p>
    </li>
  );
};

export default Online;
