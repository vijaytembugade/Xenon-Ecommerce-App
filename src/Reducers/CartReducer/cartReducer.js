const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cartList: [...state.cartList, action.payload] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartList: state.cartList.filter((item) => {
          return item.product.id !== action.payload;
        }),
      };
    }
    case "SET_QUANTITY": {
      return {
        ...state,
        cartList: [
          ...state.cartList.map((item) => {
            if (item.product.id === action.payload.id) {
              if (action.payload.quantity_status === "INC") {
                return { ...item, quantity: item.quantity + 1 };
              } else if (action.payload.quantity_status === "DEC") {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            } else {
              return item;
            }
          }),
        ],
      };
    }
  }
};

export { cartReducer };
