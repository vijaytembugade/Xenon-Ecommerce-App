export const sortByFilter = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products.sort((a, b) => b.discountedPrice - a.discountedPrice)];
  } else if (sortBy === "LOW_TO_HIGH") {
    return [...products.sort((a, b) => a.discountedPrice - b.discountedPrice)];
  }
  return products;
};
