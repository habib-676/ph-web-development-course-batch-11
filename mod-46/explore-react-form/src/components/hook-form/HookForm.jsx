import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnchange] = useInputField();
  const [email, emailOnchange] = useInputField();
  const [password, passwordOnchange] = useInputField();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };

  return (
    <div
      style={{
        border: "2px yellow dashed",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h2>Hook form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={nameOnchange}
          placeholder="Your name"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={emailOnchange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={passwordOnchange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
