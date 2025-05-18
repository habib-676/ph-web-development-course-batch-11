import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, taste, Category, details, price } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    //send to db

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee data has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div className="p-16">
      <Link to={"/"}>
        <button className="btn">Home</button>
      </Link>
      <div className=" text-center px-10">
        <h3 className="text-3xl my-10 font-black">Edit Coffee</h3>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Name </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter coffee name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Chef</label>
            <input
              type="text"
              name="chef"
              className="input"
              placeholder="Enter coffee chef"
              defaultValue={chef}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Price</label>
            <input
              type="text"
              name="price"
              className="input"
              placeholder="Enter coffee price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Taste</label>
            <input
              type="text"
              name="taste"
              className="input"
              placeholder="Enter coffee taste"
              defaultValue={taste}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Category</label>
            <input
              type="text"
              name="Category"
              className="input"
              placeholder="Enter coffee Category"
              defaultValue={Category}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Details</label>
            <input
              type="text"
              name="details"
              className="input"
              placeholder="Enter coffee Details"
              defaultValue={details}
            />
          </fieldset>
        </div>

        <input type="submit" value="Update " className="btn w-full mt-6" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
