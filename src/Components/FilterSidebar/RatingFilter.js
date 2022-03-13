import React from "react";

function RatingFilter() {
  return (
    <>
      <div className="rating-container">
        <h3>Rating</h3>
        <label>
          <input type="radio" name="radio-button" />4 start & above
        </label>
        <label>
          <input type="radio" name="radio-button" />3 start & above
        </label>
        <label>
          <input type="radio" name="radio-button" />2 start & above
        </label>
        <label>
          <input type="radio" name="radio-button" />1 start & above
        </label>
      </div>
    </>
  );
}

export default RatingFilter;
