import React from "react";
import { useCart } from "../../Contexts";
import {
  calculateDeliveryCharges,
  calculateDiscount,
  calculateDiscountPrice,
  calculateTotalPrice,
  calculateTotalQuantity,
} from "../../Utils";

const OrderDetails = () => {
  const { state } = useCart();
  const { cartList } = state;

  const totalDisountedPrice = calculateDiscountPrice(cartList);
  const totalQuantity = calculateTotalQuantity(cartList);
  const totalPrice = calculateTotalPrice(cartList);
  const discount = calculateDiscount(totalPrice, totalDisountedPrice);
  const deliveryCharges = calculateDeliveryCharges(totalDisountedPrice);
  const totalCharges = totalDisountedPrice + deliveryCharges;

  return (
    <>
      <div className="order-details">
        <form className="form-group">
          <h2>Order details</h2>
          <div className="price-details">
            <div>
              Price (Total Quantity : <strong>{totalQuantity}</strong>)
            </div>
            <div>Rs. {totalPrice}</div>
          </div>
          <div className="price-details">
            <div>Discount</div>
            <div className="secondary-text">- Rs. {discount}</div>
          </div>
          <div className="price-details">
            <div>Discounted Price</div>
            <div> Rs. {totalDisountedPrice}</div>
          </div>
          <div className="price-details">
            <div>Delivery Charges</div>
            <div>Rs. {deliveryCharges}</div>
          </div>
          <div className="price-details">
            <div>
              <strong>TOTAL CHARGES</strong>
            </div>
            <div>
              <strong>Rs. {totalCharges}</strong>
            </div>
          </div>
          <button className="btn btn-large btn-secondary">Place Order</button>
        </form>
      </div>
    </>
  );
};

export default OrderDetails;
