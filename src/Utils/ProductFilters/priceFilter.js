export const priceFilter = (products, price) => {
  if (price.max > 0) {
    return products.filter((value) => value.discountedPrice <= price.max);
  }
  return products;
};
