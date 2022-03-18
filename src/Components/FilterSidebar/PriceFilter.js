import React from "react";
import { useFilter, useProducts } from "../../Contexts";

function PriceFilter() {
  const { state, dispatch } = useFilter();
  const { price } = state;
  const { products } = useProducts();

  const calculateMinMaxPrice = (product) => {
    return product.reduce(
      (acc, curr) => {
        if (curr.discountedPrice < acc.min) {
          return { ...acc, min: curr.discountedPrice };
        }
        if (curr.discountedPrice > acc.max) {
          return { ...acc, max: curr.discountedPrice };
        }
        return acc;
      },
      { min: 0, max: 0 }
    );
  };

  const { min, max } = calculateMinMaxPrice(products);
  return (
    <>
      <div className="price-filter">
        <h3>Price</h3>
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          value={price.max}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_PRICE", payload: e.target.value })
          }
        />
        <div>
          range : {price.min}-{price.max}
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
