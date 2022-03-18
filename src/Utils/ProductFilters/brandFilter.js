export const brandFilter = (products, brand) => {
  if (brand.length !== 0) {
    return products.reduce((acc, curr) => {
      if (brand.includes(curr.brand)) {
        return [...acc, curr];
      } else {
        return acc;
      }
    }, []);
  } else {
    return products;
  }
};
