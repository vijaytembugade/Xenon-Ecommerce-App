function calculateDiscountPrice(cartList) {
  if (cartList.length > 0) {
    return cartList.reduce((acc, curr) => {
      return (acc = acc + curr.discountedPrice * curr.qty);
    }, 0);
  }
  return 0;
}

function calculateTotalPrice(cartList) {
  if (cartList.length > 0) {
    return cartList.reduce((acc, curr) => {
      return (acc = acc + curr.price * curr.qty);
    }, 0);
  }
  return 0;
}

function calculateDiscount(totalPrice, totalDisountedPrice) {
  return totalPrice - totalDisountedPrice;
}

function calculateDeliveryCharges(totalDisountedPrice) {
  if (totalDisountedPrice < 1000) {
    return 200;
  } else {
    return 0;
  }
}

function calculateTotalQuantity(cartList) {
  return cartList.reduce((acc, curr) => {
    return (acc = acc + curr.qty);
  }, 0);
}

export {
  calculateDeliveryCharges,
  calculateDiscount,
  calculateDiscountPrice,
  calculateTotalPrice,
  calculateTotalQuantity,
};
