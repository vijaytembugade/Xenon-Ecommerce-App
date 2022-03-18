import React from "react";
import { useFilter } from "../../Contexts";

const SortByFilter = () => {
  const { state, dispatch } = useFilter();

  const handleHighToLow = () => {
    dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" });
  };

  const handleLowToHigh = () => {
    dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" });
  };
  return (
    <>
      <div className="sort-container">
        <h3>Sort by</h3>
        <label>
          <input
            type="radio"
            onChange={handleHighToLow}
            checked={state.sortBy === "HIGH_TO_LOW"}
            value="high-to-low"
            name="rating-filter-button"
          />
          Price : High to Low
        </label>
        <label>
          <input
            type="radio"
            onChange={handleLowToHigh}
            checked={state.sortBy === "LOW_TO_HIGH"}
            value="low-to-high"
            name="rating-filter-button"
          />
          Price - Low to high
        </label>
      </div>
    </>
  );
};

export default SortByFilter;
