import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Enter email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
