export const categoryFilter = (products, categories) => {
  if (categories.length !== 0) {
    return products.reduce((acc, curr) => {
      if (categories.includes(curr.categoryName)) {
        return [...acc, curr];
      } else {
        return acc;
      }
    }, []);
  } else {
    return products;
  }
};
