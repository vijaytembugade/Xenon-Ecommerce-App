import React from "react";
import { useAuth, useCart } from "../../Contexts";
import toast from "react-hot-toast";
import {
  calculateDeliveryCharges,
  calculateDiscount,
  calculateDiscountPrice,
  calculateTotalPrice,
  calculateTotalQuantity,
  loadScript,
} from "../../Utils";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const { cartList } = state;

  const totalDisountedPrice = calculateDiscountPrice(cartList);
  const totalQuantity = calculateTotalQuantity(cartList);
  const totalPrice = calculateTotalPrice(cartList);
  const discount = calculateDiscount(totalPrice, totalDisountedPrice);
  const deliveryCharges = calculateDeliveryCharges(totalDisountedPrice);
  const totalCharges = totalDisountedPrice + deliveryCharges;

  async function displayRazorpay(e) {
    e.preventDefault();
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: "INR",
      amount: totalCharges * 100,
      name: "Xenon",
      description: "Thank you for trusting us",
      image: "/assets/global/xenon.svg",

      handler: async function (response) {
        console.log(response);
        const { razorpay_payment_id } = await response;
        const orderData = {
          orderAmount: totalCharges,
          razorpayId: razorpay_payment_id,
        };
        toast(
          (t) => (
            <div>
              <h2>Order Successfull!</h2>
              <div className="toast-container">
                <span>
                  Order Id:
                  <strong>{orderData.razorpayId.split("_")[1]}</strong>
                </span>
                <span>
                  Order Amount: <strong>{orderData.orderAmount} Rs.</strong>
                </span>
              </div>
              <button
                className="btn btn-ternary btn-small toast-done-btn"
                onClick={() => {
                  toast.dismiss(t.id);
                  navigate("/products");
                  dispatch({ type: "EMPTY_THE_CART" });
                }}
              >
                Done
              </button>
            </div>
          ),
          { duration: Infinity }
        );
      },

      prefill: {
        name: user,
        contact: "8381050637",
        email: "vijaytembugade@gmail.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <div className="order-details">
        <form className="form-group" onSubmit={displayRazorpay}>
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
          <button className="btn btn-large btn-secondary" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderDetails;
