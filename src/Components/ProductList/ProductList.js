import "./ProductList.css";
import Card from "../Card/Card";
import {
  brandFilter,
  categoryFilter,
  priceFilter,
  ratingFilter,
  sizeFilter,
  sortByFilter,
} from "../../Utils";
import { useCart, useFilter, useProducts } from "../../Contexts";

const ProductList = () => {
  const { state } = useFilter();
  const { products } = useProducts();
  const { cartList } = useCart();
  const { sortBy, categories, brand, size, rating, price } = state;

  const sortedProducts = sortByFilter(products, sortBy);
  const CategoryFilteredProducts = categoryFilter(sortedProducts, categories);
  const brandFilteredProducts = brandFilter(CategoryFilteredProducts, brand);
  const sizedFilterProducts = sizeFilter(brandFilteredProducts, size);
  const ratingFilteredProducts = ratingFilter(sizedFilterProducts, rating);
  const priceFilteredProducts = priceFilter(ratingFilteredProducts, price);

  const filteredProducts = priceFilteredProducts;

  return (
    <div className="product-list-container">
      <h2>All Products ({filteredProducts.length})</h2>
      <div className="product-list flex-container">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default ProductList;
