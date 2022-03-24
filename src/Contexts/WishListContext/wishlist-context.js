import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../AuthContext/auth-context";

const WishListContenxt = createContext();

const WishListProvider = ({ children }) => {
  const { state: authState } = useAuth();
  const initialState = {
    wishList: [],
    loading: false,
  };
  const wishListReducer = (state, action) => {
    switch (action.type) {
      case "MOVE_TO_WISHLIST": {
        return { ...state, wishList: action.payload };
      }
    }
  };

  useEffect(() => {
    async function getWishListdata() {
      if (authState.isLoggedIn) {
        try {
          const responce = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: authState.token,
            },
          });

          dispatch({
            type: "MOVE_TO_WISHLIST",
            payload: [...responce.data.wishlist],
          });
        } catch (error) {
          console.log(erorr);
        }
      } else {
        dispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [],
        });
      }
    }

    getWishListdata();
  }, [authState.token]);

  const [state, dispatch] = useReducer(wishListReducer, initialState);

  return (
    <WishListContenxt.Provider value={{ state, dispatch }}>
      {children}
    </WishListContenxt.Provider>
  );
};

const useWishList = () => useContext(WishListContenxt);

export { useWishList, WishListProvider };
