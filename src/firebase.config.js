// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlA5EMgcdveSAou-C68YnGEMBp1N-trxA",
  authDomain: "surrealestate2.firebaseapp.com",
  projectId: "surrealestate2",
  storageBucket: "surrealestate2.appspot.com",
  messagingSenderId: "897776709026",
  appId: "1:897776709026:web:6be773810282f5b2be96fb",
  measurementId: "G-XJ2J6G6G1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFireStore()