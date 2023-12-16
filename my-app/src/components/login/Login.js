import React from "react";
import { Navigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  // if (true) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <div className="form-cont">
      <form>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          placeholder="Enter Password"
        />
        <button>Log In</button>
        <p className="btm-text">
          If Don't Have An Account
          <Link className="link" to="/signUp">
            <span>Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
