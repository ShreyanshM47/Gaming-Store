import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav>
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart ({cart.length})</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductList addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </motion.div>
    </Router>
  );
};

export default App;
