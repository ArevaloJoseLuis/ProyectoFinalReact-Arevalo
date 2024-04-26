import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAR23lZN3yUMrnlFZ4DtD__eU81nJyvLKI",
  authDomain: "ecommerce-coder-5dd8a.firebaseapp.com",
  projectId: "ecommerce-coder-5dd8a",
  storageBucket: "ecommerce-coder-5dd8a.appspot.com",
  messagingSenderId: "248439865045",
  appId: "1:248439865045:web:9501e96c23d2bc7882ac5c"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
