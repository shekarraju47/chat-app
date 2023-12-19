import React from "react";
import "./share.css";
import { MdPermMedia, MdEmojiEmotions } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Share = () => {
  return (
    <div className="sharMainCont">
      <div className="topCard">
        <img src="/assets/profile.jpg" alt="profile" className="sharePrflImg" />
        <input
          type="text"
          placeholder="Share Something"
          className="shareInput"
        />
      </div>
      <hr />
      <div className="shareBtm">
        <div className="shareOption">
          <MdPermMedia style={{ color: "tomato", fontSize: "22px" }} />
          <span>Photo or Video</span>
        </div>
        <div className="shareOption">
          <PiTagSimpleFill style={{ color: "red", fontSize: "22px" }} />
          <span>Tag</span>
        </div>
        <div className="shareOption">
          <FaLocationDot style={{ color: "blue", fontSize: "22px" }} />
          <span>Location</span>
        </div>
        <div className="shareOption">
          <MdEmojiEmotions style={{ color: "goldenrod", fontSize: "22px" }} />
          <span>Feelings</span>
        </div>
        <button className="shareBtn">Share</button>
      </div>
    </div>
  );
};

export default Share;
