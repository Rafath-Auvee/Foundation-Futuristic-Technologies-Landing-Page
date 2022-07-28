import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";

import ProductDetail from "./components/product/ProductDetail";
import Product from "./components/pages/Product";
import Cursor from "./components/shared/Cursor";
import { ThemeContext } from "./context/ThemeContext";
import { useState, useEffect } from "react";
import Footer from "./components/product/Footer";
import AnimatedCursor from "react-animated-cursor";
import NotFound from "./components/shared/NotFound";
import Loading from "./components/utilities/Loading";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <div
            className={`${
              isDarkMode
                ? "bg-black text-white ease-in duration-500 "
                : "bg-gray-300 text-black ease-in duration-500 "
            }`}
          >
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound></NotFound>} />
              </Routes>
              {/* <Cursor /> */}
              <Footer />
            </div>
            <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color={`${isDarkMode ? "252, 250, 250 " : "0, 0, 0 "}`}
              outerAlpha={2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            />
          </div>
        </ThemeContext.Provider>
      )}
    </div>
  );
}

export default App;
