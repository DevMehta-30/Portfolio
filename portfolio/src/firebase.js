// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoUZWOgutFejDpOj4BvovBlbwbydF7alw",
  authDomain: "portfolio-cde63.firebaseapp.com",
  projectId: "portfolio-cde63",
  storageBucket: "portfolio-cde63.appspot.com",
  messagingSenderId: "144470003389",
  appId: "1:144470003389:web:7290a2d9f7b3dc7b2bf1d4",
  databaseURL: "https://portfolio-cde63-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);