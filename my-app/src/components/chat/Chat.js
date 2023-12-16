import React from "react";
import "./chat.css";

const Chat = (props) => {
  const { avatar, name } = props.chat;

  console.log(props);
  return (
    <div className="chat-cont">
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Chat;
