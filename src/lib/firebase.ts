// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA33QsKARsV2i9HC8o6famQtonzzKhNxE",
  authDomain: "campus-connect-27082006.firebaseapp.com",
  projectId: "campus-connect-27082006",
  storageBucket: "campus-connect-27082006.firebasestorage.app",
  messagingSenderId: "165426924802",
  appId: "1:165426924802:web:9cf7f2124ee5aaa118861b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);