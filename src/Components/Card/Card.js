import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Contexts";
import Rating from "../Rating/Rating";
import "./Card.css";

const Card = ({ product }) => {
  const { state, dispatch } = useCart();

  const { cartList } = state;

  let navigate = useNavigate();

  const inCartProduct = cartList.reduce((acc, curr) => {
    return [...acc, curr.product.id];
  }, []);

  function handleAddToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: product, quantity: 1 },
    });
  }

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
          {inCartProduct.includes(product.id) ? (
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
          <span className="material-icons "> favorite_border </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
