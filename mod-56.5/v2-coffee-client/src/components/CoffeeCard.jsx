import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, price, photo, _id } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start delete the item
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the coffee from state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="border p-6 card-side card  bg-base-100 shadow-sm">
      <figure>
        <img src={photo} />
      </figure>
      <div className="card-body gap-0">
        <p>Name : {name}</p>
        <p>Chef : {chef}</p>
        <p>Chef : ${price}</p>
      </div>
      <div className="join join-vertical justify-center gap-3">
        <Link to={`/coffee-details/${_id}`}>
          <button className="btn join-item">View</button>
        </Link>

        <Link to={`/update-coffee/${_id}`}>
          <button className="btn join-item">Edit</button>
        </Link>

        <button className="btn join-item" onClick={() => handleDelete(_id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
