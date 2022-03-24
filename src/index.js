import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, FilterProvider, ProductProvider } from "./Contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
