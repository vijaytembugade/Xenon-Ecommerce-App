import React from "react";

function PriceFilter() {
  return (
    <>
      <div className="price-filter">
        <h3>Price</h3>
        <input className="slider" type="range" min="0" max="100" />
      </div>
    </>
  );
}

export default PriceFilter;
