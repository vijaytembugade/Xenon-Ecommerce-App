import axios from "axios";
import React from "react";
import { useAuth, useCart } from "../../Contexts";

function CartList({ item }) {
  const { dispatch } = useCart();
  const { state: authState } = useAuth();

  async function handleRemoveFromCart(id) {
    try {
      const responce = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: authState.token,
        },
      });
      dispatch({ type: "SET_CART", payload: [...responce.data.cart] });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function decrementQuantity(id) {
    try {
      const responce = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: authState.token,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: [...responce.data.cart] });
    } catch (err) {
      console.log(err.message);
    }
  }
  async function incrementQuantity(id) {
    try {
      const responce = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: authState.token,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: [...responce.data.cart] });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="cart-item">
        <div>
          <img className="responsive-img" src={item.images[0]} alt="" />
        </div>
        <div>
          <span className="title">{item.title}</span>
          <span>
            Price : <strong> &#8377; {item.discountedPrice} </strong>
          </span>{" "}
          <del> &#8377; {item.price}</del>
          <div className="quantity">
            Quantity:{" "}
            <span
              className="btn btn-secondary-outline btn-small btn-float"
              onClick={() => {
                if (item.qty === 1) {
                  handleRemoveFromCart(item._id);
                } else {
                  decrementQuantity(item._id);
                }
              }}
            >
              -
            </span>
            <span className="pd-1">{item.qty}</span>
            <span
              className="btn btn-secondary-outline btn-small btn-float"
              onClick={() => {
                incrementQuantity(item._id);
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className="cart-actions">
          <button className="btn btn-danger-outline btn-float">
            <i
              className="material-icons"
              onClick={() => handleRemoveFromCart(item._id)}
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
