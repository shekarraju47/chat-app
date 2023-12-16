import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
        to={"/login"}
      >
        <li>Login</li>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
        to={"/signUp"}
      >
        <li>Sing Up</li>
      </NavLink>
    </div>
  );
};

export default Header;
