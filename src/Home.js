import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Plant Shop</h1>
      <p>Your favorite online plant store.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
