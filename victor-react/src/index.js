import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCss6l00zWdFYYFpYlX3jIScv6J75o7wJc",
  authDomain: "espacio-getsha.firebaseapp.com",
  projectId: "espacio-getsha",
  storageBucket: "espacio-getsha.appspot.com",
  messagingSenderId: "257664318882",
  appId: "1:257664318882:web:0f37767ece2dc0d10c46fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

