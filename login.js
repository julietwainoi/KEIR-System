// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7d5UW8mMtkNEqLCJpAJ2doQRe-8pS3Ws",
  authDomain: "kier-system.firebaseapp.com",
  projectId: "kier-system",
  storageBucket: "kier-system.appspot.com",
  messagingSenderId: "568759981194",
  appId: "1:568759981194:web:745d63d02821862e850973",
  measurementId: "G-CXN0RY8Y9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);