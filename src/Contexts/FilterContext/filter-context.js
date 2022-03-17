import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../../Reducers";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    sortBy: undefined,
    inStock: undefined,
    categories: [],
    brand: [],
    size: [],
    rating: undefined,
    price: { min: 0, max: 0 },
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
