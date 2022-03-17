import React from "react";
import { useFilter } from "../../Contexts";

function RatingFilter() {
  const { state, dispatch } = useFilter();
  return (
    <>
      <div className="rating-container">
        <h3>Rating</h3>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="4"
            checked={state.rating === 4}
            onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: 4 })}
          />
          4 star & above
        </label>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="3"
            checked={state.rating === 3}
            onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: 3 })}
          />
          3 star & above
        </label>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="2"
            checked={state.rating === 2}
            onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: 2 })}
          />
          2 star & above
        </label>
        <label>
          <input
            type="radio"
            name="radio-button"
            value="1"
            checked={state.rating === 1}
            onChange={() => dispatch({ type: "FILTER_BY_RATING", payload: 1 })}
          />
          1 star & above
        </label>
      </div>
    </>
  );
}

export default RatingFilter;
