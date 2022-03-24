import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../../Reducers";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialState = {
    user: undefined,
    token: localStorage.getItem("AUTH_TOKEN"),
    loading: false,
    error: null,
    isLoggedIn: localStorage.getItem("AUTH_TOKEN") ? true : false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
