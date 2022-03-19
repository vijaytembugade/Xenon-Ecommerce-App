import { Action } from "history";
import React, { useEffect } from "react";
import { useCart } from "../../Contexts";

function CartList({ item }) {
  const { dispatch } = useCart();
  const { product, quantity } = item;

  useEffect(() => {
    if (quantity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
    }
  }, [quantity, product]);

  return (
    <>
      <div className="cart-item">
        <div>
          <img className="responsive-img" src={product.images[0]} alt="" />
        </div>
        <div>
          <span className="title">{product.title}</span>
          <span>
            Price : <strong> &#8377; {product.discountedPrice} </strong>
          </span>{" "}
          <del> &#8377; {product.price}</del>
          <div className="quantity">
            Quantity:{" "}
            <span
              className="btn btn-secondary-outline btn-small btn-float"
              onClick={() => {
                dispatch({
                  type: "SET_QUANTITY",
                  payload: { id: product.id, quantity_status: "DEC" },
                });
              }}
            >
              -
            </span>
            <span className="pd-1">{quantity && quantity}</span>
            <span
              className="btn btn-secondary-outline btn-small btn-float"
              onClick={() =>
                dispatch({
                  type: "SET_QUANTITY",
                  payload: { id: product.id, quantity_status: "INC" },
                })
              }
            >
              +
            </span>
          </div>
        </div>
        <div className="cart-actions">
          <button className="btn btn-danger-outline btn-float">
            <i
              className="material-icons"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
              }
            >
              delete
            </i>
          </button>
          <button className="btn btn-primary-outline btn-float">
            <i className="material-icons">favorite</i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartList;
