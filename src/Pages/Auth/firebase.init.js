// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxI1hk327Q_GRdh9obwid1_7VxjxYK3o",
  authDomain: "green-beans-veg-shop.firebaseapp.com",
  projectId: "green-beans-veg-shop",
  storageBucket: "green-beans-veg-shop.appspot.com",
  messagingSenderId: "1061428007668",
  appId: "1:1061428007668:web:7a8cfa177c0a04dac084a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;