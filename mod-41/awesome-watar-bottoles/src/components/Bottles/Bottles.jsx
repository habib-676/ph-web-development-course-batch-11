import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addToStoredCart, getStoredCart } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  //   get items

  useEffect(() => {
    const storedIds = getStoredCart();

    const storedCart = [];

    for (const id of storedIds) {
      const cartBottle = bottles.find((bottle) => bottle.id == id);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log("bottle will be added to cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save the bottle id to the storage

    addToStoredCart(bottle.id);
  };

  return (
    <div>
      <h3>Total Bottles : {bottles.length}</h3>
      <h5>Added to cart : </h5>

      <ol>
        {cart.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ol>

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
