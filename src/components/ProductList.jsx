import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  { id: 1, name: "Aloe Vera", image: "https://example.com/aloe.jpg", cost: 15 },
  { id: 2, name: "Snake Plant", image: "https://example.com/snake.jpg", cost: 20 },
  { id: 3, name: "Peace Lily", image: "https://example.com/lily.jpg", cost: 25 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {plantsArray.map(plant => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.cost}</p>
          <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
