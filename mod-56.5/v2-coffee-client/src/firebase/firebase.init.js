// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1UjJajv3_4Tok9aVX4IpFK9DcQnApsnk",
  authDomain: "coffee-store-app-2e2cf.firebaseapp.com",
  projectId: "coffee-store-app-2e2cf",
  storageBucket: "coffee-store-app-2e2cf.firebasestorage.app",
  messagingSenderId: "677768151375",
  appId: "1:677768151375:web:fe7826e0f040305623c53a",
  measurementId: "G-GQBG8BBXZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
