const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_WISHLIST": {
      return { ...state, wishList: action.payload };
    }
  }
};

export { wishlistReducer };
