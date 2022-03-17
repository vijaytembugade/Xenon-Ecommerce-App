import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <form className="form-group">
        <h2>Login</h2>

        <label>
          <span className="input-label"> Email </span>
          <input required type="email" placeholder="Email" />
        </label>

        <label>
          <span className="input-label"> Password </span>
          <input
            required
            minlength="5"
            type="password"
            placeholder="Password"
          />
        </label>
        <span className="validation-error"></span>
        <button className="btn btn-primary light-text">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
