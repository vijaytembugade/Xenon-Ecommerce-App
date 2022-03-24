import React from "react";
import CartList from "../../Components/CartList/CartList";
import OrderDetails from "../../Components/OrderDetails/OrderDetails";
import { useCart } from "../../Contexts";
import "./Cart.css";

function Cart() {
  const {
    state: { cartList },
  } = useCart();

  return (
    <div className="flex-container">
      <div className="cart-list flex-container-verticle">
        <span className="title title-lg">My cart</span>
        <span>Total Item: {cartList.length}</span>
        {cartList.length > 0 ? (
          cartList.map((item) => {
            return (
              <div key={item.id}>
                <CartList item={item} />
              </div>
            );
          })
        ) : (
          <h3>Cart is Empty</h3>
        )}
      </div>
      {cartList.length ? <OrderDetails /> : ""}
    </div>
  );
}

export default Cart;
