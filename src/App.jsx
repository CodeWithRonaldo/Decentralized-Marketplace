import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TransactionHistory from "./components/TransactionHistory";
import AddProductForm from "./components/AddProductForm";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/add-products" element={<AddProductForm />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
