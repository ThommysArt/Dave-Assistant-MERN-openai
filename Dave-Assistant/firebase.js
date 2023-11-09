// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtUlnSqpBCe1JSXCpHJR9wCoiA2FAYMIQ",
  authDomain: "ai-assistant-mern.firebaseapp.com",
  projectId: "ai-assistant-mern",
  storageBucket: "ai-assistant-mern.appspot.com",
  messagingSenderId: "203607475163",
  appId: "1:203607475163:web:7835dc5f86914abc8a1dfe",
  measurementId: "G-CSTD9STNLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);