import React from "react";
import { useFilter } from "../../Contexts";

const ClearFilter = () => {
  const { dispatch } = useFilter();
  return (
    <div className="clear-filter-button">
      <button
        className="btn btn-small btn-primary-outline"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Clear{" "}
      </button>
    </div>
  );
};

export default ClearFilter;
