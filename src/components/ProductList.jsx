import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Gaming Mouse',
    price: 59.99,
    image: 'https://placehold.co/200x150/444/fff?text=Mouse',
  },
  {
    id: 2,
    name: 'Gaming Keyboard',
    price: 129.99,
    image: 'https://placehold.co/200x150/444/fff?text=Keyboard',
  },
  {
    id: 3,
    name: 'Gaming Headset',
    price: 99.99,
    image: 'https://placehold.co/200x150/444/fff?text=Headset',
  },
  {
    id: 4,
    name: 'Gaming Monitor',
    price: 399.99,
    image: 'https://placehold.co/200x150/444/fff?text=Monitor',
  },
  {
    id: 5,
    name: 'Gaming Chair',
    price: 299.99,
    image: 'https://placehold.co/200x150/444/fff?text=Chair',
  },
  {
    id: 6,
    name: 'Game Controller',
    price: 49.99,
    image: 'https://placehold.co/200x150/444/fff?text=Controller',
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <motion.div
      className="product-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="product-card"
          whileHover={{ scale: 1.05 }}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;
