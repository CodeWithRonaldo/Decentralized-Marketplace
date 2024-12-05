import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <ul>
          <h3>Quick Links</h3>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/market-place">Marketplace</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <h3>Follow Us</h3>
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://discord.gg/">Discord</a>
          </li>
          <li>
            <a href="https://github.com/CodeWithRonaldo">GitHub</a>
          </li>
          <li>
            <a href="https://medium.com/">Medium</a>
          </li>
        </ul>
      </div>
      <div className="footer-copy">
        <p>
          Welcome to the Decentralized Product Marketplace! | Buy, Sell, and
          Trade Securely on the Blockchain! 🚀
        </p>
        <p>© Abdulkudus 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
