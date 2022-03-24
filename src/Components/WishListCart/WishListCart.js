import axios from "axios";
import React from "react";
import { useAuth, useCart, useWishList } from "../../Contexts";

import { useNavigate } from "react-router-dom";

const WishListCart = ({ product }) => {
  const navigate = useNavigate();
  const { state: authState } = useAuth();
  const { dispatch: wishListdispatch } = useWishList();
  const { dispatch: cartDispatch } = useCart();

  const handleDeleteFromWishList = async (id) => {
    if (authState.isLoggedIn) {
      try {
        const responce = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: { authorization: authState.token },
        });
        wishListdispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [...responce.data.wishlist],
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  const handleAddToCart = async (product) => {
    handleDeleteFromWishList(product._id);
    if (authState.isLoggedIn) {
      try {
        const responce = await axios.post(
          "/api/user/cart",
          { product },
          {
            headers: { authorization: authState.token },
          }
        );
        cartDispatch({ type: "SET_CART", payload: [...responce.data.cart] });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div key={product.id}>
      <div className="card">
        <div className="card-media">
          <img className="responsive-img" src={product.images[0]} alt="img" />
        </div>
        <div className="card-content">
          <span className="title"> {product.title} </span>
          <span className="subtitle"> {product.subtitle} </span>
          <div className="card-description">
            <span>
              Price : <strike>{product.price}</strike>
              {"  "}
              <strong>{product.discountedPrice} Rs.</strong>
            </span>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger-outline"
            onClick={() => handleDeleteFromWishList(product._id)}
          >
            <span className="material-icons md-24">delete</span>
          </button>
          <button
            className="btn btn-primary-outline"
            onClick={() => handleAddToCart(product)}
          >
            <span className="material-icons md-24">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCart;