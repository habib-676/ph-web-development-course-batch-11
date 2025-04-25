// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwAF7awTMeZKyDV_M6G1WT4G_oOWH01LM",
  authDomain: "simple-firebase-auth-fb30e.firebaseapp.com",
  projectId: "simple-firebase-auth-fb30e",
  storageBucket: "simple-firebase-auth-fb30e.firebasestorage.app",
  messagingSenderId: "226677941250",
  appId: "1:226677941250:web:ea2bac3210dab15faab31b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
