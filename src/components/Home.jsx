import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the Gaming Store</h1>
      <p>
        Explore our wide range of gaming products and find your next favorite
        game!
      </p>
    </motion.div>
  );
};

export default Home;
