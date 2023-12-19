import React from "react";
import Feed from "../feed/Feed";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import RightBar from "../rightbar/RightBar";

import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
