import React, { useState, useEffect, useContext } from "react";
import { walletContext } from "../App";
import { GrCart } from "react-icons/gr";
import main from "../contractAP";
import { ethers } from "ethers";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const { isConnected } = useContext(walletContext);

  useEffect(() => {
    const getProducts = async () => {
      if (isConnected) {
        const mainFunction = await main();
        console.log(mainFunction);
        const product = await mainFunction.listProducts();
        console.log(product);

        setProducts(product);
        console.log("product fetched successfully");
      }
    };
    getProducts();
  }, [isConnected]);
  const handleBuy = async (id, price) => {
    // await buyProduct(id, price);
    alert("Order Placed Successfully");
  };
  return (
    <>
      <div className="products-container">
        <div>
          <h1>COLLECTIONS</h1>
        </div>
        <div className="products">
          <ul className="products-list">
            {products.map((product) => (
              <li key={product.id} className="product-card">
                <img src="url" alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price:{ethers.formatEther(product[2])} ETH</p>
                <button
                  className="add-cart"
                  onClick={() =>
                    handleBuy(
                      product[0].toString(),
                      ethers.formatEther(product[2])
                    )
                  }
                >
                  Buy Now
                  <GrCart className="cart-icon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
