// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdFNWvtl6K93Tn4a0YIvvX2Iq4xZZ9wA0",
  authDomain: "react-disney-plus-app-873df.firebaseapp.com",
  projectId: "react-disney-plus-app-873df",
  storageBucket: "react-disney-plus-app-873df.appspot.com",
  messagingSenderId: "244533021856",
  appId: "1:244533021856:web:7b1322cd2449f66fd44dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;