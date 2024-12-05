import React from "react";
import { getTransactions } from "../contractAP";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
const TransactionHistory = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const tx = await getTransactions();
      setTransaction(tx);
    };
    fetchTransactions();
  }, []);
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
                <th> Buyer Address</th>
                <th>Date</th>
                <th> Amount</th>
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
                    <td>{ethers.formatEther(transact.amount)}</td>
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
