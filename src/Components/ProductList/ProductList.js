import React from "react";
import "./ProductList.css";
import { products } from "../../data";
import Card from "../Card/Card";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>All Products ({products.length})</h2>
      <div className="product-list flex-container">
        {products &&
          products.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default ProductList;
