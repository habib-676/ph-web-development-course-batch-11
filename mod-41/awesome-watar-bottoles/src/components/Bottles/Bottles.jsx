import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    console.log("bottle will be added to cart", bottle);
  };
  return (
    <div>
      <h3>Total Bottles : {bottles.length}</h3>
      <div className="bottles-container">
        {bottles.map((bot) => (
          <Bottle
            key={bot.id}
            bottle={bot}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
