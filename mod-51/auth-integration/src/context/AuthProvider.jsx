import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);

    setLoading(true);
  };

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   console.log('current user : ',currentUser);
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user: ", currentUser);

      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
