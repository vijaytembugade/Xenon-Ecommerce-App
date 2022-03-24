import React from "react";
import { useAuth } from "../../Contexts";
import Login from "../../Screens/Login/Login";

const PrivateRoutes = ({ children }) => {
  const { state: authState } = useAuth();
  return <>{authState.isLoggedIn ? children : <Login />}</>;
};

export default PrivateRoutes;
