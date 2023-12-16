import React from "react";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  // if (true) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <div>
      <form>
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email Adress"
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
        <p>
          If Don't Have An Account
          <Link to="/signUp">
            <span>Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
