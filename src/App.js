
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";

import ProductDetail from "./components/product/ProductDetail";
import Product from "./components/pages/Product";
import Cursor from "./components/shared/Cursor";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Cursor/>
    </div>
  );
}

export default App;
