import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const NavBar = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [account, setAccount] = React.useState("");
  

  async function connectWallet() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xaa36a7" }],
      });
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            chainId: "0xaa36a7",
            chainName: "Sepolia",
            rpcUrls: ["https://sepolia.drpc.org"],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
            nativeCurrency: {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
      setIsConnected(true);
      const account = await accounts[0];
      setAccount(account);
    } catch (switchError) {
      if (switchError.code === 4902) {
        alert("Please connect to the Sepolia Network");
      }
    }
  }
  function disconnectWallet() {
    setIsConnected(false);
    setAccount("");
  }

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
        <button
          onClick={isConnected ? () => disconnectWallet() : () => connectWallet()}
          className="connect-btn"
        >
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
