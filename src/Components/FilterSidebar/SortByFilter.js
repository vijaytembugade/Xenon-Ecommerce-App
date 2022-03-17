import React from "react";

const SortByFilter = () => {
  return (
    <>
      <div className="sort-container">
        <h3>Sort by</h3>
        <label>
          <input type="radio" name="radio-button" />
          Price : High to Low
        </label>
        <label>
          <input type="radio" name="radio-button" />
          Price - Low to high
        </label>
      </div>
    </>
  );
};

export default SortByFilter;
