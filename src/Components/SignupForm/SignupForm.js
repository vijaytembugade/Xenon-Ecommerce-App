import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext/auth-context";
import Loader from "../Loader/Loader";

function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state: authState, dispatch } = useAuth();
  const { user, loading, error } = authState;
  async function handleSignup(e) {
    e.preventDefault();
    dispatch({ type: "SIGNUP_REQUEST" });

    try {
      if (password === confirmPassword) {
        const response = await axios.post("/api/auth/signup", {
          email: email,
          password: password,
        });

        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: {
            user: response.data.createdUser.email,
            token: response.data.encodedToken,
          },
        });

        localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);

        navigate("/");
      } else {
        throw new Error("Password Does not matched!");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: { errorMessage: error },
      });
    }
  }
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form className="form-group" onSubmit={handleSignup}>
          <h2>Sign in</h2>

          <label>
            <span className="input-label"> Email </span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className="input-label"> Password </span>
            <input
              required
              minLength="5"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span className="input-label"> Confirm Password </span>
            <input
              required
              minLength="5"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <span className="validation-error"></span>
          <button type="submit" className="btn btn-secondary">
            Sign Up
          </button>
          <div className="link-to-login">
            Already have an account?{" "}
            <strong>
              <Link className="secondary-text" to="/login">
                Login
              </Link>
            </strong>
          </div>
        </form>
      )}
    </>
  );
}

export default SignupForm;
