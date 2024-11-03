// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVW1MLT2HtnIj_BwpECo40WoT46TzQ-ds",
  authDomain: "magicofbaking-20cfa.firebaseapp.com",
  projectId: "magicofbaking-20cfa",
  storageBucket: "magicofbaking-20cfa.firebasestorage.app",
  messagingSenderId: "926859021727",
  appId: "1:926859021727:web:9e7b1afd81f344643041aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);