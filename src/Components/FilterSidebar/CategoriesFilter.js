import React from "react";

function CategoriesFilter() {
  return (
    <>
      <div className="category-container">
        <h3>Categories</h3>
        <label>
          <input checked type="checkbox" />
          <span> Diaries </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> Notebooks </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> Business </span>
        </label>
        <label>
          <input checked type="checkbox" />
          <span> Students </span>
        </label>
      </div>
    </>
  );
}

export default CategoriesFilter;
