import React from "react";

const ProductForm = ({handleAddProducts}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };

    handleAddProducts(newProduct)
  };
  return (
    <div
      style={{
        border: "2px white solid",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h3>Add a product</h3>

        <input type="text" name="name" placeholder="Product Name " />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="number" name="quantity" placeholder="Product quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
