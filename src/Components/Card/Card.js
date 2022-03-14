import React from "react";
import Rating from "../Rating/Rating";
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div>
      <div className="card">
        <div className="card-media">
          <img className="responsive-img" src={product.images[0]} alt="img" />
        </div>
        <div className="card-content">
          <span className="title"> {product.title} </span>
          <span className="subtitle"> {product.subtitle} </span>
          <div className="card-description">
            <div className="rating">
              {/* {product.rating}
              <span className="material-icons md-18 rated"> star_rate </span>
              <span className="material-icons md-18 rated"> star_rate </span>
              <span className="material-icons md-18 rated"> star_half </span>
              <span className="material-icons md-18"> star_rate </span>
              <span className="material-icons md-18"> star_rate </span> */}
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
          <button className="btn btn-block btn-secondary">
            <span className="material-icons md-24"> shopping_cart </span>
            Add to cart
          </button>
        </div>
        <div className="card-dismiss light-bg-color">
          <span className="material-icons "> favorite_border </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
