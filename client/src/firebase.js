// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b738c.firebaseapp.com",
  projectId: "mern-blog-b738c",
  storageBucket: "mern-blog-b738c.appspot.com",
  messagingSenderId: "1013607361457",
  appId: "1:1013607361457:web:7e20eb621f28063694ab90",
  measurementId: "G-GG5SMV9GR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
