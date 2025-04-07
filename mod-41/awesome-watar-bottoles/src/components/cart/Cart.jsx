import React from "react";
import "./cart.css";

const Cart = ({ cart ,removeItemFromCart}) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} width="200px" />
          <button onClick={()=>{removeItemFromCart(bottle.id)}}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
