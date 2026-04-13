// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwyoJwjZpVm4bax8coNneKhatmU0--zj8",
  authDomain: "codecolab-bdaef.firebaseapp.com",
  projectId: "codecolab-bdaef",
  storageBucket: "codecolab-bdaef.firebasestorage.app",
  messagingSenderId: "349956232477",
  appId: "1:349956232477:web:6a7e260e2e3aee0e0a3df4",
  measurementId: "G-R5NYWZXLSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);