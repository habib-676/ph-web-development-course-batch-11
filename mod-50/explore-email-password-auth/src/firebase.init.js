import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjiTmOYS6QkHq5U_QlPDSdL1Kgv-NM44",
  authDomain: "explore-email-password-a-e466d.firebaseapp.com",
  projectId: "explore-email-password-a-e466d",
  storageBucket: "explore-email-password-a-e466d.firebasestorage.app",
  messagingSenderId: "785472849323",
  appId: "1:785472849323:web:5502ddb409f79e3b33feee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
