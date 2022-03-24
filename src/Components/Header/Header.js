import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../Contexts";

import "./Header.css";

const Header = () => {
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
              <span className="badge badge-round secondary-bg-color dark-text">
                {authState.isLoggedIn ? wishList.length : 0}
              </span>
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
              <span className="badge badge-round secondary-bg-color dark-text">
                {cartList.length !== 0 && authState.isLoggedIn
                  ? cartList.length
                  : 0}
              </span>
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
                className="btn btn-ternary-outline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div id="hamburger" className="hamburger">
          <span className="material-icons md-36"> menu </span>
        </div>

        <div className="responsive-navbar">
          {/* <div id="closeNavbar" className="danger-text">
            <span className="material-icons md-36"> close </span>
            Close
          </div>
          <a href="#" className={({ isActive }) =>
                isActive ? "nav-item" + { activeClassName } : "nav-item"
              }>
            {" "}
            Login{" "}
          </a>
          <a href="#" className={({ isActive }) =>
                isActive ? "nav-item" + { activeClassName } : "nav-item"
              }>
            Sign Up
          </a>
          <a href="#" className={({ isActive }) =>
                isActive ? "nav-item" + { activeClassName } : "nav-item"
              }>
            <span className="material-icons"> shopping_cart </span>
            <span className="badge badge-round secondary-bg-color">0</span>
          </a>
          <a href="" className={({ isActive }) =>
                isActive ? "nav-item" + { activeClassName } : "nav-item"
              }>
            <span className="material-icons"> shopping_cart </span>
            <span className="badge badge-round secondary-bg-color">0</span>
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
