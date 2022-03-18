export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "SORT_BY": {
      return { ...state, sortBy: action.payload };
    }
    case "FILTER_BY_CATEGORY": {
      return {
        ...state,
        categories: !state.categories.includes(action.payload)
          ? [...state.categories, action.payload]
          : state.categories.filter((value) => value !== action.payload),
      };
    }

    case "FILTER_BY_BRAND": {
      return { ...state, brand: action.payload };
    }

    case "FILTER_BY_SIZE": {
      return { ...state, size: action.payload };
    }
    case "FILTER_BY_RATING": {
      return { ...state, rating: action.payload };
    }

    case "FILTER_BY_PRICE": {
      return { ...state, price: { min: 0, max: action.payload } };
    }

    case "CLEAR_FILTER": {
      return {
        sortBy: undefined,
        inStock: undefined,
        categories: [],
        brand: [],
        size: [],
        rating: undefined,
        price: { min: 0, max: 0 },
      };
    }

    default: {
      return new Error("Filter is not acceptabled");
    }
  }
};
