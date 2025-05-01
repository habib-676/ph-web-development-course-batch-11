import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };


  return (
    <div className="card bg-base-100 mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleLogin}>
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
          <input type="submit" value="Login" className="btn mt-5 bg-black" />
        </form>
        <p>
          New to this site?
          <Link className="text-blue-500 underline" to="/register">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
