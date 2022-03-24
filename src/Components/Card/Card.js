import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../Contexts";
import Rating from "../Rating/Rating";
import "./Card.css";

const Card = ({ product }) => {
  const {
    state: { cartList },
    dispatch,
  } = useCart();
  const { state: authState } = useAuth();
  const {
    state: { wishList },
    dispatch: wishListdispatch,
  } = useWishList();

  let navigate = useNavigate();

  const handleAddToCart = async (product) => {
    if (authState.isLoggedIn) {
      try {
        const responce = await axios.post(
          "/api/user/cart",
          { product },
          {
            headers: { authorization: authState.token },
          }
        );
        dispatch({ type: "SET_CART", payload: [...responce.data.cart] });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const handlewishlist = async () => {
    if (authState.isLoggedIn) {
      try {
        const responce = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: { authorization: authState.token },
          }
        );
        wishListdispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [...responce.data.wishlist],
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const handleRemoveFromWishlist = async (id) => {
    if (authState.isLoggedIn) {
      try {
        const responce = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: { authorization: authState.token },
        });
        wishListdispatch({
          type: "MOVE_TO_WISHLIST",
          payload: [...responce.data.wishlist],
        });
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
            <div className="rating">
              <Rating value={product.rating} />
            </div>
            <span>
              Price : <strike>{product.price}</strike>
              {"  "}
              <strong>{product.discountedPrice} Rs.</strong>
            </span>
          </div>
        </div>
        <div className="card-footer">
          {authState.isLoggedIn &&
          cartList.find((item) => item._id === product._id) ? (
            <button
              className="btn btn-block btn-ternary-outline"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="btn btn-block btn-secondary"
              onClick={() => handleAddToCart(product)}
            >
              <span className="material-icons md-24">shopping_cart</span>
              Add to cart
            </button>
          )}
        </div>
        <div className="card-dismiss light-bg-color">
          {authState.isLoggedIn &&
          wishList.find((item) => item._id === product._id) ? (
            <span
              className="material-icons danger-text"
              onClick={() => handleRemoveFromWishlist(product._id)}
            >
              favorite
            </span>
          ) : (
            <span
              className="material-icons"
              onClick={() => handlewishlist(product)}
            >
              favorite_border
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
