import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login-page-container  flex-container">
        <div className="login-form-container">
          <span className="dark-text title title-lg">
            <span className="primary-text">X</span>enon-
            <span className="secondary-text">S</span>tationery
          </span>
          <p>Login to see amazing products we provide!</p>
          <LoginForm />
          <div className="link-to-signup">
            <strong>
              Don't have an account?{" "}
              <Link className="primary-text" to="/signup">
                SignUp
              </Link>
            </strong>
          </div>
        </div>
        <div className="login-img-container">
          <img
            className="responsive-img"
            src="assets/loginpage/login-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
