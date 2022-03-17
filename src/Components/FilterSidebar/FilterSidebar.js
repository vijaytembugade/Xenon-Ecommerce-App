import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import "./FilterSidebar.css";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import SizeFilter from "./SizeFilter";
import SortByFilter from "./SortByFilter";
import BrandFilter from "./BrandFilter";
import ClearFilter from "./ClearFilter";

const FilterSidebar = () => {
  return (
    <>
      <div className="filter-container">
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
