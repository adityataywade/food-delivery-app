// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "zomato-project-1cc07.firebaseapp.com",
  projectId: "zomato-project-1cc07",
  storageBucket: "zomato-project-1cc07.firebasestorage.app",
  messagingSenderId: "643293435812",
  appId: "1:643293435812:web:6d4775d2c33c44f0b81331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}