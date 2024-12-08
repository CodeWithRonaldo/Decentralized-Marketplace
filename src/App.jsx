import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TransactionHistory from "./components/TransactionHistory";
import AddProductForm from "./components/AddProductForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
import { createContext, useState } from "react";

export const walletContext = createContext({
  isConnected: false,
  account: "",
  connectWallet: () => {},
  disconnectWallet: () => {},
});

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  function disconnectWallet(){
    setIsConnected(false)
    setAccount('')

  }

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
  return (
    <>
      <walletContext.Provider value={{isConnected, account, connectWallet, disconnectWallet}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market-place" element={<Marketplace />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="/add-products" element={<AddProductForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </walletContext.Provider>
    </>
  );
};

export default App;
