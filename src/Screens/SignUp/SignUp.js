import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="signup-page-container flex-container container">
        <div className="signup-form-container">
          <span className="dark-text title title-lg">
            <span className="primary-text">X</span>enon-
            <span className="secondary-text">S</span>tationary
          </span>
          <p>Here you go, grab your notebooks and diaries now!</p>
          <SignupForm />
        </div>
        <div className="signup-img-container">
          <img
            className="responsive-img"
            src="assets/signuppage/signup-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
