import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    // const name = e.target.name.value;

    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card bg-base-100 mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold text-center my-10">Sign up</h1>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSignUp}>
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <input type="submit" value="Sign Up" className="btn mt-5 bg-black" />
        </form>
        <p>
          Already have an account ?
          <Link className="text-blue-500 underline" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
