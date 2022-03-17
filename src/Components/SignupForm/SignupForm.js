import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <>
      <form className="form-group">
        <h2>Sign in</h2>

        <label>
          <span className="input-label"> Email </span>
          <input required type="email" />
        </label>

        <label>
          <span className="input-label"> Password </span>
          <input required minlength="5" type="password" />
        </label>
        <label>
          <span className="input-label"> Confirm Password </span>
          <input required minlength="5" type="password" />
        </label>
        <span className="validation-error"></span>
        <button className="btn btn-secondary">Sign Up</button>
        <div className="link-to-login">
          Already have an account?{" "}
          <strong>
            <Link className="secondary-text" to="/login">
              Login
            </Link>
          </strong>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
