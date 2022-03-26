import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../Contexts";

import "./Header.css";

const Header = () => {
  const [dispayNavBar, setDisplatNavbar] = useState("");
  const {
    state: { cartList },
  } = useCart();
  const { state: authState, dispatch } = useAuth();
  const {
    state: { wishList },
  } = useWishList();

  let activeClassName = "active-nav-item";

  function handleLogout() {
    localStorage.removeItem("AUTH_TOKEN");
    dispatch({ type: "LOGOUT" });
  }

  function handleResponsiveNavBar() {
    setDisplatNavbar((prevState) => (prevState === "" ? "display-navbar" : ""));
  }

  return (
    <div>
      <nav className="text-dark ">
        <div className="nav-brand ">
          <Link to="/">
            <img src="../../xenon.svg" alt="Xenon" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "nav-item " + activeClassName : "nav-item "
              }
            >
              <span className="material-icons"> favorite </span>
              {authState.isLoggedIn && (
                <span className="badge badge-round secondary-bg-color dark-text">
                  {wishList.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-item " + activeClassName : "nav-item "
              }
            >
              <span className="material-icons"> shopping_cart </span>
              {authState.isLoggedIn && (
                <span className="badge badge-round secondary-bg-color dark-text">
                  {cartList.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-item " + activeClassName : "nav-item "
              }
            >
              Products
            </NavLink>
          </li>
          {!authState.isLoggedIn && (
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "nav-item " + activeClassName : "nav-item "
                }
              >
                Signup
              </NavLink>
            </li>
          )}
          {!authState.isLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-item " + activeClassName : "nav-item "
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {authState.isLoggedIn && (
            <li>
              <button
                className="btn btn-ternary-outline btn-small nav-item"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div
          id="hamburger"
          className="hamburger"
          onClick={handleResponsiveNavBar}
        >
          <span className="material-icons md-36"> menu </span>
        </div>

        <div className={"responsive-navbar " + dispayNavBar}>
          <div
            id="closeNavbar"
            className="danger-text"
            onClick={handleResponsiveNavBar}
          >
            <span className="material-icons md-36"> close </span>
            Close
          </div>
          {!authState.isLoggedIn && (
            <NavLink
              to="/login"
              className="nav-item"
              onClick={handleResponsiveNavBar}
            >
              Login
            </NavLink>
          )}
          {!authState.isLoggedIn && (
            <NavLink
              to="/signup"
              className="nav-item"
              onClick={handleResponsiveNavBar}
            >
              Sign Up
            </NavLink>
          )}
          <NavLink
            to="/products"
            className="nav-item "
            onClick={handleResponsiveNavBar}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="nav-item"
            onClick={handleResponsiveNavBar}
          >
            <span className=""> Cart </span>
            <span className="material-icons"> shopping_cart </span>
            {authState.isLoggedIn && (
              <span className="badge badge-round secondary-bg-color">
                {cartList.length}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/wishlist"
            className="nav-item"
            onClick={handleResponsiveNavBar}
          >
            <span className=""> WishList </span>
            <span className="material-icons"> favorite </span>
            {authState.isLoggedIn && (
              <span className="badge badge-round secondary-bg-color">
                {wishList.length}
              </span>
            )}
          </NavLink>
          {authState.isLoggedIn && (
            <button
              className="btn btn-ternary btn-block nav-item"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
