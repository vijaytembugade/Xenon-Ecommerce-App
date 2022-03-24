const { createContext, useContext, useReducer, useEffect } = require("react");

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialState = {
    user: undefined,
    token: localStorage.getItem("AUTH_TOKEN"),
    loading: false,
    error: null,
    isLoggedIn: localStorage.getItem("AUTH_TOKEN") ? true : false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST": {
        return { ...state, loading: true };
      }
      case "LOGIN_SUCCESS": {
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      }
      case "LOGIN_ERROR": {
        return {
          ...state,
          loading: false,
          user: undefined,
          token: undefined,
          error: action.payload.erorrMessage,
          isLoggedIn: false,
        };
      }

      case "LOGOUT": {
        return {
          ...state,
          loading: false,
          user: undefined,
          token: null,
          error: undefined,
          isLoggedIn: false,
        };
      }

      case "SIGNUP_REQUEST": {
        return { ...state, loading: true };
      }

      case "SIGNUP_SUCCESS": {
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      }
      case "SIGNUP_ERROR": {
        return {
          ...state,
          loading: false,
          user: undefined,
          token: undefined,
          error: action.payload.erorrMessage,
          isLoggedIn: false,
        };
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
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
