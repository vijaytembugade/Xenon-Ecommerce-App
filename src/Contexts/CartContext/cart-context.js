import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../../Reducers";
import { useAuth } from "../AuthContext/auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { state: authState } = useAuth();

  const initialState = {
    cartList: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    async function getCartItems() {
      try {
        const responce = await axios.get("/api/user/cart", {
          headers: {
            authorization: authState.token,
          },
        });

        dispatch({ type: "SET_CART", payload: [...responce.data.cart] });
      } catch (err) {
        console.log(err);
      }
    }

    getCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
