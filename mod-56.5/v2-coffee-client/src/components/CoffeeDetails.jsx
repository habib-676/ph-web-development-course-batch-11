import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, photo, chef, price, taste } = coffee;
  const navigate = useNavigate();
  return (
    <div>
      <Link>
        <button className="btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </Link>
      <h3>Details of {name}</h3>
      <div className="card card-side bg-base-100 border p-6 m-5 shadow-sm">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-red-700">Niceties</h2>
          <p>Name : {name}</p>
          <p>Price : ${price}</p>
          <p>Chef : {chef}</p>
          <p>Taste : {taste}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
