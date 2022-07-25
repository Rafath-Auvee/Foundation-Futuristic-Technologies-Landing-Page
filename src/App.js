
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
