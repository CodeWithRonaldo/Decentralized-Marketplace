import React from "react";

const TransactionHistory = () => {
  return (
    <>
    <div className="transaction-container">
    <div className="transaction-search-bar">
        <input type="search" placeholder="Search transaction history" className="search-bar-input"/>
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
              <th>Transaction ID</th>
              <th>Transaction Date</th>
              <th>Transaction Type</th>
              <th>Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2022-01-01</td>
              <td>Deposit</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2022-01-02</td>
              <td>Withdrawal</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2022-01-03</td>
              <td>Deposit</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2022-01-04</td>
              <td>Withdrawal</td>
              <td>$150.00</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2022-01-05</td>
              <td>Deposit</td>
              <td>$300.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      
    </>
  );
};

export default TransactionHistory;
