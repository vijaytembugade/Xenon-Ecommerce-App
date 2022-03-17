import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
            <NavLink to="/wishlist" className="nav-item">
              <span className="material-icons"> favorite </span>
              <span className="badge badge-round secondary-bg-color">5</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-item">
              <span className="material-icons"> shopping_cart </span>
              <span className="badge badge-round secondary-bg-color">0</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-item">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="nav-item">
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
