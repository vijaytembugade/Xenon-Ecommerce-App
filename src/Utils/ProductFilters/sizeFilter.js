export const sizeFilter = (products, size) => {
  if (size.length !== 0) {
    return products.reduce((acc, curr) => {
      if (size.includes(curr.size)) {
        return [...acc, curr];
      } else {
        return acc;
      }
    }, []);
  } else {
    return products;
  }
};
