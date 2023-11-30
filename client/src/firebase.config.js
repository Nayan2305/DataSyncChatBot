// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRoVhiAr-HRARojwYIODN56OoTqSUaFok",
  authDomain: "data-sync-chatbot.firebaseapp.com",
  projectId: "data-sync-chatbot",
  storageBucket: "data-sync-chatbot.appspot.com",
  messagingSenderId: "380957553087",
  appId: "1:380957553087:web:3a6bf232d50ff18826710a",
  measurementId: "G-T3NDVJD9B7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);