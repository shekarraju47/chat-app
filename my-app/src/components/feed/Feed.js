import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { post } from "../../dummy";

const Feed = () => {
  return (
    <div className="feedMainCont">
      <div className="feedWrapper">
        <Share />
        {post.map((item) => (
          <Post data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
