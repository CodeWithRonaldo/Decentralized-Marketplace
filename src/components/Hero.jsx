import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Your Gateway to a Decentralized Marketplace</h1>
          <h2>Discover a Decentralized Marketplace Built on Trust</h2>
          <p>
            Explore a marketplace designed to give you full control. Sell
            products globally, make secure crypto payments, and access a
            transparent transaction history—all in one place
          </p>
        </div>

        <div className="hero-btn">
          <Link to="/add-products">
            <button className="started-btn">Sell</button>
          </Link>

          <Link to="/market-place">
            <button className="buy-btn">Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
