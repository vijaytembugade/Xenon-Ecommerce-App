import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts";
import Loader from "../Loader/Loader";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state: authState, dispatch } = useAuth();

  const { loading, user, error } = authState;

  async function handleLogin(e) {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_REQUEST" });
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: response.data.foundUser.email,
          token: response.data.encodedToken,
        },
      });

      localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);

      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: { errorMessage: error },
      });
    }
  }

  function setTestLogin() {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
  }
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form className="form-group" onSubmit={handleLogin}>
          <h2>Login</h2>

          <label>
            <span className="input-label"> Email </span>
            <input
              required={false}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className="input-label"> Password </span>
            <input
              required={false}
              minLength="5"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span className="validation-error"></span>
          <button type="submit" className="btn btn-primary light-text">
            Log In
          </button>
          <button
            onClick={setTestLogin}
            className="btn btn-ternary-outline light-text"
          >
            Guest Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
