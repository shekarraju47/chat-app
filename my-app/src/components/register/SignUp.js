import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-cont">
      <form>
        <label htmlFor="email">Name</label>
        <input id="name" type="text" placeholder="Enter Name" required />

        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          required
        />

        <label htmlFor="name">Email</label>
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
        <button>Sign Up</button>
        <p className="btm-text">
          If Already Have An Account
          <Link className="link" to="/login">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
