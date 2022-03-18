export const ratingFilter = (products, rating) => {
  if (rating) {
    return products.filter((product) => product.rating >= rating);
  }
  return products;
};
