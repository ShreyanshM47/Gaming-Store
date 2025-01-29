import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="cart-item"
              whileHover={{ scale: 1.02 }}
            >
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </motion.div>
          ))}
          <p>
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </p>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
