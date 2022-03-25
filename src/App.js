import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Screens/Home/HomePage";
import ProductListing from "./Screens/ProductListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Screens/SignUp/SignUp";
import Login from "./Screens/Login/Login";
import Wishlist from "./Screens/Wishlist/Wishlist";
import Cart from "./Screens/Cart/Cart";
import Mockman from "mockman-js";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/cart"
            element={
              <PrivateRoutes>
                <Cart />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <PrivateRoutes>
                <Wishlist />
              </PrivateRoutes>
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
