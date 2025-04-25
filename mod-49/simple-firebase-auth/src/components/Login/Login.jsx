import React from "react";

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
  };
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={() => handleGoogleSignIn()}>Log in with google</button>
    </div>
  );
};

export default Login;
