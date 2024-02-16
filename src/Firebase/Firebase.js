// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from "firebase/auth"

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu1ol7em5R5OhBAi1qs9Ci-Ox-G91lAWk",
  authDomain: "vaccinebookingapp-47e27.firebaseapp.com",
  projectId: "vaccinebookingapp-47e27",
  storageBucket: "vaccinebookingapp-47e27.appspot.com",
  messagingSenderId: "735111485540",
  appId: "1:735111485540:web:7fb15a03e4ca279a142771",
  measurementId: "G-Q7JB11RWC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app)

export default app