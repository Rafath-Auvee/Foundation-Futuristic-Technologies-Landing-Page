import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";

import ProductDetail from "./components/product/ProductDetail";
import Product from "./components/pages/Product";
import Cursor from "./components/shared/Cursor";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import Footer from "./components/product/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`${
          isDarkMode
            ? "bg-black text-white ease-in duration-500 "
            : "bg-gray-100 text-black ease-in duration-500 "
        }`}
      >
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
          {/* <Cursor /> */}
          <Footer/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
