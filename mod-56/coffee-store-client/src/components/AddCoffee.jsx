import React from "react";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const photo = form.photo.value;

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // send coffee data to db;
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log("after adding data from db", data));
  };
  return (
    <div className="p-16">
      <div className=" text-center px-10">
        <h3 className="text-3xl my-10 font-black">Add New Coffee</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Name </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Chef</label>
            <input
              type="text"
              name="chef"
              className="input"
              placeholder="Enter coffee chef"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Taste</label>
            <input
              type="text"
              name="taste"
              className="input"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Category</label>
            <input
              type="text"
              name="Category"
              className="input"
              placeholder="Enter coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Details</label>
            <input
              type="text"
              name="details"
              className="input"
              placeholder="Enter coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label w-full">Photo </label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input type="submit" value="Add coffee" className="btn w-full mt-6" />
      </form>
    </div>
  );
};

export default AddCoffee;
