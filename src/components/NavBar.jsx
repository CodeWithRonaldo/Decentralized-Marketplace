import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div>
        <h1>LOGO</h1>
      </div>
      <div className="nav-items">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/transaction-history" className="nav-link">
          Transaction History
        </NavLink>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default NavBar;
