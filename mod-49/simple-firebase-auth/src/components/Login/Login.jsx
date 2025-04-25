import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button onClick={() => handleGoogleSignIn()}>
            Log in with google
          </button>
        </div>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
