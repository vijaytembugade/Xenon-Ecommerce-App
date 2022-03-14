import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "bold",
  };

  let activeClassName = "underline";
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
            {/* <Link to="/wishlist" className="nav-item">
              <span className="material-icons"> favorite </span>
              <span className="badge badge-round secondary-bg-color">5</span>
            </Link> */}
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="material-icons"> favorite </span>
              <span className="badge badge-round secondary-bg-color">5</span>
            </NavLink>
          </li>
          <li>
            <Link to="/cart" className="nav-item">
              <span className="material-icons"> shopping_cart </span>
              <span className="badge badge-round secondary-bg-color">0</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-item">
              Products
            </Link>
          </li>
          <li>
            <NavLink
              to="/signup"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Signup
            </NavLink>
            {/* <Link to="/signup" className="nav-item">
              Sign up
            </Link> */}
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
          <a href="#" className="nav-item">
            {" "}
            Login{" "}
          </a>
          <a href="#" className="nav-item">
            Sign Up
          </a>
          <a href="#" className="nav-item">
            <span className="material-icons"> shopping_cart </span>
            <span className="badge badge-round secondary-bg-color">0</span>
          </a>
          <a href="" className="nav-item">
            <span className="material-icons"> shopping_cart </span>
            <span className="badge badge-round secondary-bg-color">0</span>
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
