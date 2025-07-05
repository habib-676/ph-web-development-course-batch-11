import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-5xl font-bold text-center">Create an account</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email?.type == "required" && (
              <p className="text-red-500">Enter your email to proceed</p>
            )}

            <label className="label">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required to proceed</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password length requires 6 characters at least
              </p>
            )}
            <button className="btn btn-neutral mt-4">Sign up</button>
          </fieldset>
          <p>
            <small>
              Already have an account?{" "}
              <Link to={"/auth/sign-in"} className="text-primary">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
