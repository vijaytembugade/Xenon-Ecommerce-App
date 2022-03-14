import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import "./FilterSidebar.css";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import SelectFilter from "./SelectFilters/SelectFilter";
import SizeFilter from "./SizeFilter";
import SortByFilter from "./SortByFilter";

const FilterSidebar = () => {
  return (
    <div className="filter-container">
      <PriceFilter />
      <SortByFilter />
      <CategoriesFilter />
      <SelectFilter />
      <SizeFilter />
      <RatingFilter />
    </div>
  );
};

export default FilterSidebar;
