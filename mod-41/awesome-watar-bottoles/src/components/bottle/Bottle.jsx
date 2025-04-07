import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" width="300px" />
      <h3>{name}</h3>
      <h5>${price}</h5>
      <h5>Available : {stock} piece</h5>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
