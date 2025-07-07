import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type == "required" && (
              <p className="text-red-700">Password is required</p>
            )}
            {errors.password?.type == "minLength" && (
              <p className="text-yellow-600">
                Password must be longer than 6 characters
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
          </fieldset>

          <button className="btn btn-neutral mt-4">Login</button>
        </div>
        <p>
          <small>
            Don't have any account?{" "}
            <Link to={"/auth/register"} className="text-primary">
              Register
            </Link>
          </small>
        </p>
      </div>
    </form>
  );
};

export default Login;
