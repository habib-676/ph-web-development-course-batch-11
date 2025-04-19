import React, { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    console.log(email, password);
  };

  return (
    <div
      style={{
        border: "2px green dashed",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={emailRef}
          name="email"
          placeholder="Enter email"
        />{" "}
        <br />
        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="Password ..."
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;
