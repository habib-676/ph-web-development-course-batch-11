// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRU-CyG-lF8AUpAG3SlYfA4Tg0w5pPYgI",
  authDomain: "auth-integration-82c8f.firebaseapp.com",
  projectId: "auth-integration-82c8f",
  storageBucket: "auth-integration-82c8f.firebasestorage.app",
  messagingSenderId: "263056347713",
  appId: "1:263056347713:web:b45668e83e589291eb6cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);