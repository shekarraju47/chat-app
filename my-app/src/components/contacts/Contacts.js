import React from "react";
import "./contacts.css";

const Contacts = (props) => {
  const { item, keys, select, isSelected } = props;

  const selectHandler = () => {
    select(keys);
  };
  return (
    <div className="conts-cont">
      <li className={isSelected ? "selected" : ""} onClick={selectHandler}>
        <img alt="avatar" src={item.avatar} />
        <p>{item.name}</p>
      </li>
    </div>
  );
};

export default Contacts;
