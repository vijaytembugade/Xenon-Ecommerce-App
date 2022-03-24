import React from "react";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductList from "../../Components/ProductList/ProductList";
import "./ProductListing.css";

const ProductListing = () => {
  return (
    <div className="product-listing-container ">
      <FilterSidebar />
      <ProductList />
    </div>
  );
};

export default ProductListing;
