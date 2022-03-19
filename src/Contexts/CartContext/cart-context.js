import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../../Reducers";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cartList: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
