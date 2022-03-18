import React from "react";
import { useFilter } from "../../Contexts";

const ClearFilter = () => {
  const { dispatch } = useFilter();
  return (
    <div class="clear-filter-button">
      <button
        class="btn btn-small btn-primary-outline"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Clear{" "}
      </button>
    </div>
  );
};

export default ClearFilter;
