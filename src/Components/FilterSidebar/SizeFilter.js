import React from "react";

const SizeFilter = () => {
  return (
    <div>
      <div className="category-container">
        <h3>Sizes</h3>
        <label>
          <input checked type="checkbox" />
          <span> Regular </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> A6 </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> A3 </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> A4 </span>
        </label>
      </div>
    </div>
  );
};

export default SizeFilter;
