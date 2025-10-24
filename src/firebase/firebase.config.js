// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEcUj1qRyyz-9aVGxydNjQNmY1b5vyFY4",
  authDomain: "rais-up.firebaseapp.com",
  projectId: "rais-up",
  storageBucket: "rais-up.firebasestorage.app",
  messagingSenderId: "276854078523",
  appId: "1:276854078523:web:d503c8656c2550e02f701e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;