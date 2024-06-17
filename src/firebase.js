import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMIzZ0cyXIqkMrHtGeZpyjB9-0p35JEfI",
  authDomain: "logistics-e6330.firebaseapp.com",
  projectId: "logistics-e6330",
  storageBucket: "logistics-e6330.appspot.com",
  messagingSenderId: "1031806053736",
  appId: "1:1031806053736:web:5d1dd6ec6f9f6889953add",
  measurementId: "G-GSRWMZWN9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const database = getDatabase();

export default app;