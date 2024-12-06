import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import main from "../contractAP"; // Adjust the import path accordingly

const TransactionHistory = () => {
  const [transaction, setTransaction] = useState([]);
  const [contractFunctions, setContractFunctions] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      const functions = await main(); // Call the main function to get contract functions
      setContractFunctions(functions);
    };
    initializeContract();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (contractFunctions) {
        const tx = await contractFunctions.getTransactions();
        setTransaction(tx);
      }
    };
    fetchTransactions();
  }, [contractFunctions]);

  return (
    <>
      <div className="transaction-container">
        <div className="transaction-search-bar">
          <input
            type="search"
            placeholder="Search transaction history"
            className="search-bar-input"
          />
        </div>
        <div className="head-filter">
          <h1>Transactions</h1>
          <select name="filter">
            <option value="add-filter">Add Filter</option>
            <option value="all">All</option>
            <option value="date">Date</option>
            <option value="type">Type</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="transaction-history">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Seller Address</th>
                <th>Buyer Address</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((transact) => {
                return (
                  <tr key={transact.productId}>
                    <td>{`${transact.seller.slice(
                      0,
                      5
                    )}...${transact.seller.slice(-5)}`}</td>
                    <td>{`${transact.buyer.slice(
                      0,
                      5
                    )}...${transact.buyer.slice(-5)}`}</td>
                    <td>
                      {new Date(
                        transact.timestamp.toString() * 1000
                      ).toLocaleString()}
                    </td>
                    <td>{transact.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
