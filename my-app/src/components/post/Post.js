import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import "./post.css";

import { Users } from "../../dummy";

const Post = (props) => {
  const { date, comment, like, postDesc, imageSource, userId } = props.data;
  const res = Users.filter((item) => item.id === userId);
  return (
    <div className="postMainCont">
      <div className="postCont">
        <div className="topcard">
          <img src={res[0].profileImg} alt="" className="profileImg" />
          <p className="userName">{res[0].userName}</p>
          <span className="postTime">{date}</span>
        </div>
        <div className="timeAndDetilaCont">
          <BsThreeDotsVertical />
        </div>
      </div>
      <p className="descptn">{postDesc}</p>
      <img src={imageSource} alt="" className="uploadImg" />
      <div className="btmCont">
        <div className="firstCont">
          <AiFillLike className="likeBtn" />
          <FcLike className="loveBtn" />
          <p>{like}</p>
        </div>
        <div className="seconCont">{comment}</div>
      </div>
    </div>
  );
};

export default Post;
