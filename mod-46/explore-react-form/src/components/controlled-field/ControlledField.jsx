import React, { useState } from "react";

// control component 1 per each field

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("The password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <div
      style={{
        border: "2px red dashed",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <br />
        <input type="email" name="email" placeholder="Your email" required />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          placeholder="Enter password"
          onChange={handleOnChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p
        style={{
          color: "red",
        }}
      >
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
