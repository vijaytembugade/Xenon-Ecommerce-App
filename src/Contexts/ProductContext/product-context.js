import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
