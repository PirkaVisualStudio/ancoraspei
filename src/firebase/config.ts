// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa37nZ8tD76uAm0AGtzmV-ifWdBI3hypU",
  authDomain: "pirka-login.firebaseapp.com",
  projectId: "pirka-login",
  storageBucket: "pirka-login.firebasestorage.app",
  messagingSenderId: "647660121772",
  appId: "1:647660121772:web:33b6828ec876670b497909",
  measurementId: "G-ZYFGZ0QMF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const projectAuth = getAuth(app);

