import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { walletContext } from "../App";

const NavBar = () => {
  // const [isConnected, setIsConnected] = React.useState(false);
  const { connectWallet, isConnected, account, disconnectWallet } = useContext(walletContext);

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
        <button onClick={isConnected ? disconnectWallet: connectWallet} className="connect-btn">
          {isConnected
            ? `${account.slice(0, 6)}...${account.slice(-4, -1)}`
            : "Connect Wallet"}
        </button>

        <IoPersonCircleOutline className="profile-icon" />
      </div>
    </div>
  );
};

export default NavBar;
