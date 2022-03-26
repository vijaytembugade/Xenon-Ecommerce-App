import React, { useState } from "react";
import CategoriesFilter from "./CategoriesFilter";
import "./FilterSidebar.css";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import SizeFilter from "./SizeFilter";
import SortByFilter from "./SortByFilter";
import BrandFilter from "./BrandFilter";
import ClearFilter from "./ClearFilter";
import { useFilter } from "../../Contexts";

const FilterSidebar = () => {
  const { dispatch } = useFilter();
  const [hidefilter, setHideFilter] = useState("hide-filter");

  const handleHideFilter = () => {
    setHideFilter((prevState) =>
      prevState === "hide-filter" ? "" : "hide-filter"
    );
  };
  return (
    <>
      <div className="filter-button ">
        <button
          class=" btn btn-small btn-block btn-primary btn-small"
          onClick={handleHideFilter}
        >
          {hidefilter === "hide-filter" ? "Filters" : "Apply"}
        </button>
        <button
          className="btn btn-block btn-primary "
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          Clear Filter
        </button>
      </div>
      <div className={"filter-container " + hidefilter}>
        <div className="filter-headings flex-container">
          <h3 className="title title-md">Filters</h3>
          <ClearFilter />
        </div>
        <PriceFilter />
        <SortByFilter />
        <CategoriesFilter />
        <BrandFilter />
        <SizeFilter />
        <RatingFilter />
      </div>
    </>
  );
};

export default FilterSidebar;
