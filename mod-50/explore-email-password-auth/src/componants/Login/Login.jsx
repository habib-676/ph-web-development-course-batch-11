import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset err
    setErrorMsg(" ");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          alert("Verify your Email please");
          return;
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  const handleForgetPass = () => {
    console.log(emailRef.current.value);
    const currEmail = emailRef.current.value;
    setErrorMsg("");

    // send email pass
    sendPasswordResetEmail(auth, currEmail)
      .then(() => {
        alert("Reset email is sent");
      })
      .catch((err) => setErrorMsg(err.message));
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="flex items-center justify-center">
        <div className="card-body items-start border border-white max-w-md mt-10">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div onClick={handleForgetPass}>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </div>
      </form>
      {
        <p>
          New to this web site?{" "}
          <Link className="text-blue-500 underline" to="/register">
            Sign up
          </Link>
        </p>
      }
      {errorMsg && <p className="mt-10  text-red-500 font-bold">{errorMsg}</p>}
      {success && (
        <p className="mt-10 text-green-500">Successfully Login done </p>
      )}
    </div>
  );
};

export default Login;
