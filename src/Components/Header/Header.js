import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Contexts";

import "./Header.css";

const Header = () => {
  const { state } = useCart();
  const { cartList } = state;

  let activeClassName = "active-nav-item";

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
                5
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
                {cartList.length !== 0 ? cartList.length : 0}
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
