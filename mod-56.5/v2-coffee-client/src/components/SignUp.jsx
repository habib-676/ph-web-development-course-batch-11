import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 mx-auto mt-20  max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-3xl text-center font-black">Sign up Now !</h2>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSignUp}>
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
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
