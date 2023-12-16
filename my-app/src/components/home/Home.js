import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import Contacts from "../contacts/Contacts";
import "./home.css";
import Chat from "../chat/Chat";

export const contacts = [
  {
    name: "shekar",
    avatar:
      "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png",
  },
  {
    name: "ram",
    avatar:
      "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png",
  },
  {
    name: "rajesh",
    avatar:
      "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png",
  },
  {
    name: "manoj",
    avatar:
      "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png",
  },
];

const owner = {
  name: "me",
  avatar:
    "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png",
};

const Home = () => {
  const [selectId, setSelectId] = useState();

  const select = (id) => {
    setSelectId(id);
  };

  return (
    <div className="home-cont">
      {/* <Headers /> */}
      <ul>
        {contacts.map((item, index) => (
          <Contacts
            key={index}
            item={item}
            isSelected={index === selectId}
            select={select}
            keys={index}
          />
        ))}
      </ul>
      <div>
        <Chat chat={!contacts[selectId] ? owner : contacts[selectId]} />
      </div>
    </div>
  );
};

export default Home;
