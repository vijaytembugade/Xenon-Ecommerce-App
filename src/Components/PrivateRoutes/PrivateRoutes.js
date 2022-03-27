import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts";
import Login from "../../Screens/Login/Login";

const PrivateRoutes = ({ children }) => {
  const { state: authState } = useAuth();
  return (
    <>{authState.isLoggedIn ? children : <Navigate replace to="/login" />}</>
  );
};

export default PrivateRoutes;
