// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGybtLf3O7_uelpHgMCE9z2VC8yLS2nAc",
  authDomain: "projects-cbb90.firebaseapp.com",
  projectId: "projects-cbb90",
  storageBucket: "projects-cbb90.appspot.com",
  messagingSenderId: "591457702234",
  appId: "1:591457702234:web:8b381f9b65acf59f75a363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);