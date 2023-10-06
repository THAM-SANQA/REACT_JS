import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwQ0Qf76G8_CKhrYkIEECws-RrZgqRxYk",
  authDomain: "crudproject-bc47e.firebaseapp.com",
  projectId: "crudproject-bc47e",
  databaseURL: "https://crudproject-bc47e-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "crudproject-bc47e.appspot.com",
  messagingSenderId: "855026701925",
  appId: "1:855026701925:web:213e6c4d1e7c5ea13d988c",
  //measurementId: "G-TF09HCBF1Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
