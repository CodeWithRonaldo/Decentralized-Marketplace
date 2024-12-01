import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div>
          <h1>CryptoMart</h1>
        </div>
        <div>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/market-place" className="nav-link">
            Marketplace
          </NavLink>
          <NavLink to="/transaction-history" className="nav-link">
            Transaction History
          </NavLink>
        </div>
      </div>

      <div className="nav-right">
        <NavLink to="/add-products" className="nav-link">
          Add Products
        </NavLink>
        <input
          type="text"
          placeholder="Search for collections, NFTs or users"
          className="search-bar"
        />
        <button className="connect-btn">Connect Wallet</button>
        
        <IoPersonCircleOutline className="profile-icon" />


      </div>
    </div>
  );
};

export default NavBar;
