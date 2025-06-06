import Lottie from "lottie-react";
import registerAni from "../../assets/Lotties/register.json";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import SharedSocial from "../Shared/SharedSocial";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));

    form.reset();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={registerAni}
            loop={true}
            style={{ width: "300px" }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleRegister}>
              <h1 className="text-5xl font-bold">Register now!</h1>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Register"
              />
            </form>
            <SharedSocial></SharedSocial>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
