import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase/Firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={() => handleGoogleSignIn()}>Log in with google</button>
    </div>
  );
};

export default Login;
